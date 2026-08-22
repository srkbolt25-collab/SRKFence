# SRK Fence - Full Stack Next.js Application

A modern, full-stack fencing company website with admin dashboard, built with Next.js, MongoDB, and TypeScript.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:
```
MONGODB_URI=mongodb+srv://srkbolt25_db_user:cVeHGg1xjbs4IGj9@cluster0.z8qkosg.mongodb.net/srkfence_db?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Initialize Database
```bash
npm run init-db
```

This will create:
- Default admin user (admin@srkfence.com / admin123)
- Sample products
- Sample testimonials

### 4. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes (backend)
│   │   ├── auth/         # Authentication endpoints
│   │   ├── products/     # Product management
│   │   └── testimonials/ # Testimonial management
│   ├── admin/            # Admin pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── admin/            # Admin components
│   └── ui/               # UI components
├── lib/                   # Utilities
│   ├── mongodb.ts        # MongoDB connection
│   ├── auth.ts           # Authentication utilities
│   └── api.ts            # API client
├── pages/                 # Page components
├── scripts/               # Utility scripts
│   └── init-db.ts        # Database initialization
└── public/                # Static assets
```

## 🔐 Admin Access

- **URL**: `/admin/login`
- **Email**: `admin@srkfence.com`
- **Password**: `admin123`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run init-db` - Initialize database with default data

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: MongoDB
- **Authentication**: JWT
- **UI**: React, Tailwind CSS, shadcn/ui
- **Language**: TypeScript

## 🚢 Deployment to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_API_URL` (optional, auto-set by Vercel)
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Run `npm run build`
- Deploy both frontend and API routes together

## 📝 API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (auth required)
- `PUT /api/products/[id]` - Update product (auth required)
- `DELETE /api/products/[id]` - Delete product (auth required)

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial (auth required)
- `PUT /api/testimonials/[id]` - Update testimonial (auth required)
- `DELETE /api/testimonials/[id]` - Delete testimonial (auth required)

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Admin dashboard with authentication
- ✅ Product management
- ✅ Testimonial management
- ✅ MongoDB integration
- ✅ JWT authentication
- ✅ Single command deployment
- ✅ Vercel-ready

## 📄 License

Private - SRK Fence Industries
