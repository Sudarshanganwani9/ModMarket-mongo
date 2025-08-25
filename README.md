# ModMarket

A modern marketplace application built with React, Vite, TailwindCSS, TypeScript, and MongoDB.
It allows users to explore, browse, and purchase products in a clean, responsive, and dynamic UI.


---

## 🚀 Features

🛍️ Product listings with categories and featured sections

🎨 Modern UI using TailwindCSS and ShadCN components

⚡ Fast bundling with Vite + TypeScript

🔒 Environment configuration support (.env)

📦 Modular component structure

🗄️ MongoDB integration for product and user data

📱 Fully responsive design



---

## 🛠️ Tech Stack

Frontend: React, TypeScript, Vite, TailwindCSS, ShadCN

Backend: Node.js / Express (MongoDB for storage)

Database: MongoDB

Build Tools: PostCSS, ESLint



---

## 📂 Project Structure

ModMarket-mongo-main/
├── public/              # Static assets
├── src/                 # Application source code
│   ├── assets/          # Images, icons
│   ├── components/      # Reusable UI + Marketplace components
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
├── package.json         # Dependencies & scripts
├── tailwind.config.ts   # TailwindCSS config
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite configuration


---

## ⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/yourusername/ModMarket-mongo.git
cd ModMarket-mongo-main


2. Install dependencies

npm install
# or
bun install


3. Setup environment variables
Create a .env file in the root directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000


4. Run the development server

npm run dev


5. Build for production

npm run build

