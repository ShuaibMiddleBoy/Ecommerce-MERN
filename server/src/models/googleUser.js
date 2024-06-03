import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    googleID: String,
    displayName: String,
    email: String,
    image: String,
  },
  { timestamps: true }
);

const UserModel = new mongoose.model("users", UserSchema);

export default UserModel;
