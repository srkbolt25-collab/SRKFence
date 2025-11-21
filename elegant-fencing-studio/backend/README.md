# SRK Fence Backend API

Next.js backend API with MongoDB integration for SRK Fence admin dashboard.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (already created with default values):
```
MONGODB_URI=mongodb+srv://srkbolt25_db_user:cVeHGg1xjbs4IGj9@cluster0.z8qkosg.mongodb.net/srkfence_db?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXT_PUBLIC_API_URL=http://localhost:3000
```

3. Initialize database with default data:
```bash
npm run init-db
```

4. Run development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## API Endpoints

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

## Default Credentials

- Email: `admin@srkfence.com`
- Password: `admin123`

## Database Collections

- `users` - Admin users
- `products` - Product catalog
- `testimonials` - Customer testimonials

