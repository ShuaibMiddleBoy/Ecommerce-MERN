import mongoose from "mongoose";

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MONGODB CONNTECTED!!");
  } catch (error) {
    console.log("DB Connection Failed!!");
  }
};

export default mongoDB;
