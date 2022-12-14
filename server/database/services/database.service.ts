import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

// Global Variables
export const collections: {
  ingredients?: mongoDB.Collection;
  uniqueIdentifierCounter?: mongoDB.Collection;
} = {};

export const connectDb = async () => {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING!
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME!);

  const ingredientsCollection: mongoDB.Collection = db.collection(
    process.env.INGREDIENTS_COLLECTION_NAME!
  );

  const uniqueIdentifierCounterCollection: mongoDB.Collection = db.collection(
    process.env.UNIQUE_IDENTIFIER_COUNTER_COLLECTION_NAME!
  );

  ingredientsCollection.createIndex({ name: 1 }, { unique: true });

  collections.ingredients = ingredientsCollection;
  collections.uniqueIdentifierCounter = uniqueIdentifierCounterCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${ingredientsCollection.collectionName}`
  );
};
