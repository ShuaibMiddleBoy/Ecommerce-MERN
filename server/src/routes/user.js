import express from "express";
import { loginController, registerController } from "../controllers/user.js";

const router = express.Router();

// routing
router.post("/register", registerController);
router.post("/login", loginController);

export default router;
