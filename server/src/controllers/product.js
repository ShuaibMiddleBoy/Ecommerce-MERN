import Product from "../models/product.js";
import Category from "../models/category.js"

// controller for post/create a product
export const addProduct = async (req, res) => {
  const { productTitle, productPrice, productDesc, productCategory } = req.body;
  const productImage = req.file?.filename;

  try {
    if (!productTitle || !productPrice || !productImage || !productDesc || !productCategory) {
      return res.status(400).json({
        error: "All fields (productTitle, productPrice, productImage, productDesc, productCategory) are required.",
      });
    }

    const category = await Category.findById(productCategory);
    if (!category) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const product = new Product({
      productTitle,
      productPrice,
      productImage,
      productDesc,
      productCategory,
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to show/get all products
export const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve products. Please try again later.",
    });
  }
};

// controller for show/get specific product

export const showProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ _id: id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchProduct = async (req, res) => {
  const { key } = req.params;

  try {
    const searchedProd = await Product.find({
      productTitle: { $regex: key, $options: "i" },
    });
    res.status(200).json(searchedProd);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


// controller for fetching products by category
export const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const products = await Product.find({ productCategory: categoryId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};