import express from "express";
import { loginController, registerController, getAllUsers } from "../controllers/user.js";

const router = express.Router();

// routing
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/users", getAllUsers)

export default router;
