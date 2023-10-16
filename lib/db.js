import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://maximilian:lXbK5XPljrYEHllb@cluster0.faworq1.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
