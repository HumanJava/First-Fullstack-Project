import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connection successful: ${con.connection.host}`);
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    process.exit(1); // 1 code indicates an error, 0 indicates success
  }
};