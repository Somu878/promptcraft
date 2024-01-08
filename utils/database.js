import mongoose from "mongoose";

let dbConnected = false;
export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (dbConnected) {
    console.log("Db connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptcraft",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    dbConnected = true;
    console.log("Db connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
