import express from "express";
const router = express.Router();
import { postUserReview, getUserReview } from "../controllers/userReview.js";


router.post("/product/:id/review", postUserReview);
router.get("/product/:id/review", getUserReview);

export default router;