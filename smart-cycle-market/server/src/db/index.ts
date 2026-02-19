import mongoose from "mongoose"

export const connectDB = async (uri: string): Promise<void> => {
  await mongoose.connect(uri)
} 