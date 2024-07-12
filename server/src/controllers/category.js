import Category from "../models/category.js";

export const addCategory = async (req, res) => {
  const { name } = req.body;
  
  try {
    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }

    const category = new Category({ name });
    const savedCategory = await category.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const showCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
