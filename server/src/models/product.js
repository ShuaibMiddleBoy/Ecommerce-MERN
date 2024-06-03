import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productTitle: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productDesc: {
    type: String,
    required: true,
  },
});

const Model = new mongoose.model("product", ProductSchema);

export default Model;
