import { MongoClient, Db } from 'mongodb';

// MongoDB connection options with proper SSL/TLS configuration for MongoDB Atlas
const options: any = {
  maxPoolSize: 10,
  minPoolSize: 2,
  serverSelectionTimeoutMS: 10000, // Increased timeout
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  // Use IPv4 to avoid IPv6 issues
  family: 4,
  // Retry configuration
  retryWrites: true,
  retryReads: true,
  // Don't set tls explicitly - let MongoDB driver handle it from connection string
  // MongoDB Atlas connection strings already include TLS configuration
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

function getMongoUri(): string {
  // Load dotenv if not already loaded
  if (typeof window === 'undefined' && !process.env.MONGODB_URI) {
    try {
      require('dotenv').config({ path: '.env.local' });
    } catch (e) {
      // dotenv might not be available, continue
    }
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local. Make sure MONGODB_URI is set.');
  }
  
  // Ensure the URI has proper parameters for MongoDB Atlas
  let mongoUri = uri;
  if (mongoUri.includes('mongodb.net')) {
    // Check if URI already has query parameters
    const hasQuery = mongoUri.includes('?');
    const separator = hasQuery ? '&' : '?';
    
    // Build query parameters
    const params: string[] = [];
    
    // Add retryWrites if not present
    if (!mongoUri.includes('retryWrites=')) {
      params.push('retryWrites=true');
    }
    
    // Add w=majority if not present
    if (!mongoUri.includes('w=')) {
      params.push('w=majority');
    }
    
    // Add tls=true if not present (MongoDB Atlas requires TLS)
    if (!mongoUri.includes('tls=') && !mongoUri.includes('ssl=')) {
      params.push('tls=true');
    }
    
    if (params.length > 0) {
      mongoUri = `${mongoUri}${separator}${params.join('&')}`;
    }
  }
  
  return mongoUri;
}

function getClientPromise(): Promise<MongoClient> {
  if (clientPromise) {
    return clientPromise;
  }

  const uri = getMongoUri();

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect().catch((error) => {
        // Reset the promise on error so we can retry
        globalWithMongo._mongoClientPromise = undefined;
        clientPromise = undefined;
        throw error;
      });
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect().catch((error) => {
      // Reset the promise on error so we can retry
      clientPromise = undefined;
      throw error;
    });
  }

  return clientPromise;
}

export async function getDatabase(): Promise<Db> {
  try {
    const client = await getClientPromise();
    return client.db('srkfence_db');
  } catch (error: any) {
    console.error('MongoDB connection error:', error);
    
    // Reset the connection promise to allow retry
    if (process.env.NODE_ENV === 'development') {
      let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
      };
      globalWithMongo._mongoClientPromise = undefined;
    }
    clientPromise = undefined;
    
    // Re-throw with a more helpful error message
    if (error.message?.includes('SSL') || error.message?.includes('TLS') || error.cause?.code === 'ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR') {
      throw new Error(
        'MongoDB SSL/TLS connection error. Please check:\n' +
        '1. Your MongoDB Atlas connection string is correct and includes proper credentials\n' +
        '2. Your IP address is whitelisted in MongoDB Atlas (or use 0.0.0.0/0 for all IPs)\n' +
        '3. Your network/firewall allows outbound connections to MongoDB Atlas (port 27017)\n' +
        '4. Your MongoDB Atlas cluster is running and accessible\n' +
        `Original error: ${error.message || error.cause?.message || 'Unknown error'}`
      );
    }
    
    throw error;
  }
}

// Export the function, not the promise
export default getClientPromise;

