# 🚀 Quick Setup Guide

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Create Environment File
Create `.env.local` in the root directory:
```
MONGODB_URI=mongodb+srv://srkbolt25_db_user:cVeHGg1xjbs4IGj9@cluster0.z8qkosg.mongodb.net/srkfence_db?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## Step 3: Initialize Database
```bash
npm run init-db
```

## Step 4: Start Development Server
```bash
npm run dev
```

That's it! Your app will be running at `http://localhost:3000`

## 🎉 What You Get

✅ **Single Command** - `npm run dev` runs everything  
✅ **No Separate Backend** - API routes are in the same project  
✅ **Vercel Ready** - Deploy with one click  
✅ **MongoDB Connected** - Using your provided credentials  
✅ **Admin Dashboard** - Full CRUD operations  
✅ **Modern UI** - All your beautiful components preserved  

## 📍 Important URLs

- **Home**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **API**: http://localhost:3000/api/*

## 🔐 Default Credentials

- Email: `admin@srkfence.com`
- Password: `admin123`

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

Everything works together - no separate deployments needed!

