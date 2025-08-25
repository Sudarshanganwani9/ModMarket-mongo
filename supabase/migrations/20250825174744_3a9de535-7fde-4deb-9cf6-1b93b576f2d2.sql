-- Add missing columns to existing tables for marketplace functionality

-- Add condition column to products if not exists
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS condition text;

-- Add tags array column to products for better categorization
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS tags text[] DEFAULT '{}';

-- Add is_premium and license_type columns
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS is_premium boolean DEFAULT false;

ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS license_type text DEFAULT 'educational';

-- Add view_count for tracking popularity
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS view_count integer DEFAULT 0;

-- Create licenses table for license management
CREATE TABLE IF NOT EXISTS public.licenses (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  description text,
  requires_attribution boolean DEFAULT false,
  allows_commercial_use boolean DEFAULT false,
  allows_modification boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on licenses
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;

-- Create policy for licenses to be viewable by everyone
CREATE POLICY "Licenses are viewable by everyone" 
ON public.licenses 
FOR SELECT 
USING (true);

-- Create downloads table for tracking downloads
CREATE TABLE IF NOT EXISTS public.downloads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  product_id uuid NOT NULL,
  downloaded_at timestamp with time zone NOT NULL DEFAULT now(),
  download_type text DEFAULT 'free' -- 'free', 'premium', 'trial'
);

-- Enable RLS on downloads
ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

-- Create policies for downloads
CREATE POLICY "Users can view their own downloads" 
ON public.downloads 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create download records" 
ON public.downloads 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create wishlists table
CREATE TABLE IF NOT EXISTS public.wishlists (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  product_id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS on wishlists
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;

-- Create policies for wishlists
CREATE POLICY "Users can manage their own wishlist" 
ON public.wishlists 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Insert some default licenses
INSERT INTO public.licenses (name, description, requires_attribution, allows_commercial_use, allows_modification) VALUES
('Educational Only', 'For educational and learning purposes only. No commercial use allowed.', true, false, true),
('Open Source MIT', 'MIT License allowing commercial use with attribution.', true, true, true),
('Creative Commons', 'Creative Commons license for creative works.', true, false, true),
('Proprietary', 'All rights reserved. Limited use as specified by seller.', false, false, false)
ON CONFLICT DO NOTHING;

-- Insert some sample categories
INSERT INTO public.categories (name, description, image_url) VALUES
('Android Apps', 'Modified and educational Android applications', '/placeholder.svg'),
('Source Code', 'Complete project repositories and code samples', '/placeholder.svg'),
('Game Mods', 'Game modifications and development tools', '/placeholder.svg'),
('UI/UX Resources', 'Themes, icons, and design assets', '/placeholder.svg'),
('Web Tools', 'Browser extensions and web applications', '/placeholder.svg'),
('Security Tools', 'Ethical hacking and security research tools', '/placeholder.svg'),
('Databases', 'Sample data and database schemas', '/placeholder.svg'),
('Automation', 'Scripts and automation tools', '/placeholder.svg')
ON CONFLICT DO NOTHING;

-- Create trigger for updating view count
CREATE OR REPLACE FUNCTION public.increment_view_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.products 
  SET view_count = view_count + 1 
  WHERE id = NEW.product_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_seller ON public.products(seller_id);
CREATE INDEX IF NOT EXISTS idx_products_tags ON public.products USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_downloads_user ON public.downloads(user_id);
CREATE INDEX IF NOT EXISTS idx_downloads_product ON public.downloads(product_id);
CREATE INDEX IF NOT EXISTS idx_reviews_product ON public.reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON public.reviews(user_id);