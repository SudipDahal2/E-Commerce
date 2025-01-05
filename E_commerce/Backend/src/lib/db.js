import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI)
      throw new Error("Mongo URI is missing in environment variable ");
    const connectionInstance = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected at ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`MONGODB connection failed:${error}`);
    process.exit(1);
  }
};

export default connectDb;
