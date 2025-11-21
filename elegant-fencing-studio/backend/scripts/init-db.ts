import { getDatabase } from '../lib/mongodb';
import { hashPassword } from '../lib/auth';

async function initDatabase() {
  try {
    const db = await getDatabase();
    
    // Create default admin user
    const usersCollection = db.collection('users');
    const existingAdmin = await usersCollection.findOne({ email: 'admin@srkfence.com' });
    
    if (!existingAdmin) {
      const hashedPassword = await hashPassword('admin123');
      await usersCollection.insertOne({
        email: 'admin@srkfence.com',
        password: hashedPassword,
        name: 'Admin User',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log('✅ Default admin user created');
    } else {
      console.log('ℹ️  Admin user already exists');
    }

    // Create default products
    const productsCollection = db.collection('products');
    const existingProducts = await productsCollection.countDocuments();
    
    if (existingProducts === 0) {
      await productsCollection.insertMany([
        {
          name: 'High Security Fencing',
          category: 'Security',
          description: 'A range of high-level security fencing including tested and approved CPNI & LPS1175 A1, B3, C5 & D10 in woven mesh, 358 prison mesh and others...',
          price: '$2,500',
          status: 'Active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Metal Fencing',
          category: 'Commercial',
          description: 'Durable aluminum and steel solutions for commercial and residential security.',
          price: '$1,800',
          status: 'Active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vinyl Fencing',
          category: 'Residential',
          description: 'Low-maintenance, long-lasting vinyl fences in various styles and colors.',
          price: '$1,200',
          status: 'Active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Wood Fencing',
          category: 'Residential',
          description: 'Classic natural wood fencing with expert craftsmanship and finishing.',
          price: '$1,500',
          status: 'Active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log('✅ Default products created');
    } else {
      console.log('ℹ️  Products already exist');
    }

    // Create default testimonials
    const testimonialsCollection = db.collection('testimonials');
    const existingTestimonials = await testimonialsCollection.countDocuments();
    
    if (existingTestimonials === 0) {
      await testimonialsCollection.insertMany([
        {
          name: 'Amelia Roberts',
          role: 'Global Facilities Director, Vertex Technologies',
          quote: 'SRK FENCE delivered an impeccable perimeter solution for our headquarters. Their attention to detail and ability to coordinate complex logistics kept the project on schedule and on budget.',
          rating: 5,
          status: 'Published',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Colin Stewart',
          role: 'Head of Infrastructure, Northgate University',
          quote: 'From design workshops to installation, the team was proactive and collaborative. The final result elevates our campus while meeting rigorous security requirements.',
          rating: 5,
          status: 'Published',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sofia Martinez',
          role: 'Operations Manager, Azure Resorts',
          quote: 'Their materials knowledge and craftsmanship are second to none. We now have a premium perimeter that enhances the guest experience without compromising protection.',
          rating: 5,
          status: 'Published',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log('✅ Default testimonials created');
    } else {
      console.log('ℹ️  Testimonials already exist');
    }

    console.log('✅ Database initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization error:', error);
    process.exit(1);
  }
}

initDatabase();

