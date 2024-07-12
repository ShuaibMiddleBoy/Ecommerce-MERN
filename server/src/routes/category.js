import express from "express";
import { addCategory, showCategories } from "../controllers/category.js";

const router = express.Router();

router.post("/add", addCategory);
router.get("/", showCategories);


export default router;
