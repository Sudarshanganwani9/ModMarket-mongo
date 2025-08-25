-- Insert sample data for the marketplace

-- First, get category IDs and insert some sample products
DO $$
DECLARE
    android_cat_id uuid;
    source_cat_id uuid;
    games_cat_id uuid;
    ui_cat_id uuid;
    tools_cat_id uuid;
    security_cat_id uuid;
    test_user_id uuid := '00000000-0000-0000-0000-000000000001';
BEGIN
    -- Get category IDs
    SELECT id INTO android_cat_id FROM public.categories WHERE name = 'Android Apps' LIMIT 1;
    SELECT id INTO source_cat_id FROM public.categories WHERE name = 'Source Code' LIMIT 1;
    SELECT id INTO games_cat_id FROM public.categories WHERE name = 'Game Mods' LIMIT 1;
    SELECT id INTO ui_cat_id FROM public.categories WHERE name = 'UI/UX Resources' LIMIT 1;
    SELECT id INTO tools_cat_id FROM public.categories WHERE name = 'Web Tools' LIMIT 1;
    SELECT id INTO security_cat_id FROM public.categories WHERE name = 'Security Tools' LIMIT 1;

    -- Insert sample products
    INSERT INTO public.products (
        id, seller_id, category_id, name, description, price, stock_quantity, 
        images, condition, is_premium, license_type, tags, view_count, is_active
    ) VALUES
    (
        gen_random_uuid(), test_user_id, source_cat_id,
        'Advanced Todo App with Backend',
        'Complete React + Node.js todo application with authentication, real-time updates, and cloud deployment. Includes full source code, documentation, and deployment guides.',
        29.99, 50,
        ARRAY['/placeholder.svg'],
        'new', true, 'educational',
        ARRAY['react', 'nodejs', 'authentication', 'realtime', 'cloud'],
        1243, true
    ),
    (
        gen_random_uuid(), test_user_id, android_cat_id,
        'Social Media Manager APK',
        'Educational modified APK for learning social media automation techniques and API integration. Includes source code and detailed tutorials.',
        0, 100,
        ARRAY['/placeholder.svg'],
        'new', false, 'educational',
        ARRAY['android', 'social-media', 'automation', 'api'],
        2156, true
    ),
    (
        gen_random_uuid(), test_user_id, ui_cat_id,
        'E-commerce Dashboard',
        'Modern admin dashboard with analytics, inventory management, and customer insights built with React. Fully responsive and customizable.',
        49.99, 25,
        ARRAY['/placeholder.svg'],
        'new', true, 'educational',
        ARRAY['react', 'dashboard', 'analytics', 'ecommerce'],
        876, true
    ),
    (
        gen_random_uuid(), test_user_id, games_cat_id,
        'Game Engine Starter Kit',
        '2D game engine with physics, animation system, and level editor. Perfect for learning game development concepts and building your first games.',
        19.99, 75,
        ARRAY['/placeholder.svg'],
        'new', true, 'educational',
        ARRAY['gamedev', '2d', 'physics', 'animation'],
        654, true
    ),
    (
        gen_random_uuid(), test_user_id, tools_cat_id,
        'Web Scraping Toolkit',
        'Complete web scraping toolkit with Python scripts, Chrome extensions, and data processing utilities. Educational use only.',
        15.99, 40,
        ARRAY['/placeholder.svg'],
        'new', true, 'educational',
        ARRAY['python', 'scraping', 'automation', 'data'],
        445, true
    ),
    (
        gen_random_uuid(), test_user_id, security_cat_id,
        'Ethical Hacking Lab Setup',
        'Virtual machine setup for ethical hacking practice with pre-configured tools and vulnerable applications for learning.',
        0, 200,
        ARRAY['/placeholder.svg'],
        'new', false, 'educational',
        ARRAY['security', 'hacking', 'pentesting', 'education'],
        1876, true
    ),
    (
        gen_random_uuid(), test_user_id, source_cat_id,
        'Cryptocurrency Tracker',
        'Real-time cryptocurrency price tracker with portfolio management, alerts, and technical analysis tools. Built with React and Node.js.',
        35.99, 30,
        ARRAY['/placeholder.svg'],
        'new', true, 'educational',
        ARRAY['crypto', 'react', 'portfolio', 'api'],
        567, true
    ),
    (
        gen_random_uuid(), test_user_id, android_cat_id,
        'Fitness Tracking APK',
        'Modified fitness tracking application with additional features for learning mobile app development and health data management.',
        12.99, 80,
        ARRAY['/placeholder.svg'],
        'new', true, 'educational',
        ARRAY['android', 'fitness', 'health', 'tracking'],
        892, true
    );

    -- Insert sample reviews for some products
    INSERT INTO public.reviews (user_id, product_id, rating, comment) 
    SELECT 
        test_user_id,
        p.id,
        CASE 
            WHEN random() < 0.6 THEN 5
            WHEN random() < 0.8 THEN 4
            ELSE 3
        END,
        CASE 
            WHEN random() < 0.3 THEN 'Excellent educational resource! Very well documented.'
            WHEN random() < 0.6 THEN 'Great code quality and easy to understand.'
            ELSE 'Good for learning, helped me understand the concepts.'
        END
    FROM public.products p
    LIMIT 5;

END $$;