import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connected to db"));
  } catch (error) {
    console.log(error)
    console.log("Failed to connect to db")
    process.exit(1);
  }
};
