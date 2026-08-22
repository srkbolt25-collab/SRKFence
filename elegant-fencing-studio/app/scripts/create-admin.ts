import { config } from 'dotenv';
import { resolve } from 'path';
import { getDatabase } from '../lib/mongodb';
import { hashPassword, generateToken } from '../lib/auth';

config({ path: resolve(process.cwd(), '.env.local') });

async function run() {
  const stamp = Date.now().toString().slice(-6);
  const email = `admin${stamp}@srkfence.com`;
  const password = `Srk@${stamp}!92`;

  const db = await getDatabase();
  const users = db.collection('users');
  const hashedPassword = await hashPassword(password);

  const result = await users.insertOne({
    email,
    password: hashedPassword,
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const userId = result.insertedId.toString();
  const token = generateToken({ userId, email });

  console.log(
    JSON.stringify(
      {
        email,
        password,
        userId,
        token,
      },
      null,
      2
    )
  );
}

run().catch((error) => {
  console.error('Failed to create admin:', error);
  process.exit(1);
});
