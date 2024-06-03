import { Router } from "express";
import passport from "passport";
import { loginSuccess, logout } from "../controllers/googleAuth.js";
const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "http://localhost:5173/login",
  })
);

router.get("/login/success", loginSuccess);
router.get("/logout", logout);

export default router;
