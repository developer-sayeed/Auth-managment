import mongoose from "mongoose";

// !MongoDB Connection

export const mongodbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOSHE_URL);

    console.log(` MongoDb Connected Successful`.bgYellow.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};
