import express from "express";
import multer from "multer";
import {
  addProduct,
  showProduct,
  showProducts,
  searchProduct,
} from "../controllers/product.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images"); // Specify the relative path to the images folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("productImage"), addProduct);
router.get("/", showProducts);
router.get("/:id", showProduct);
router.get("/search/:key", searchProduct);

export default router;
