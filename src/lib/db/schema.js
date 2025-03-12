import { MongoClient } from 'mongodb';
import { drizzle } from 'drizzle-orm/mongo-core';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const client = new MongoClient(process.env.DATABASE_URL);
const db = client.db('store-sh');

export const database = drizzle(db);

// Export the client for use in other parts of the application
export { client };