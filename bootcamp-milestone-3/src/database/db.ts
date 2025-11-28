import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
};

// logs collections for debugging
export async function checkCollections() {
  await mongoose.connect(url);

  const collections = await mongoose.connection.db?.listCollections().toArray();
  console.log(
    "Collections:",
    collections ? collections.map((c) => c.name) : "No collections"
  );
}

export default connectDB;
