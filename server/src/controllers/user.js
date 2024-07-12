import userModel from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

// Controller for Registeration
export const registerController = async (req, res) => {
  try {
    const { displayName, email, password, confirmPassword } = req.body;

    if (!displayName) {
      return res
        .status(400)
        .json({ success: false, message: "User name is requried" });
    }

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required" });
    }

    if (!confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Confirm password is required" });
    }

    if (password != confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Already registered, please login",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = new userModel({
      displayName,
      email,
      password: hashedPassword,
    });

    const result = await user.save();

    const token = await new Promise((resolve, reject) => {
      jwt.sign(
        { id: result._id, email: result.email },
        process.env.JWT_KEY,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        }
      );
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: result._id, displayName: result.displayName, email: result.email, role: result.role },
      auth: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message || "Internal Server Error",
    });
  }
};

// Controller for Login

export const loginController = async (req, res) => {
  try {
    const { password, email } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is not registered",
      });
    }

    const matchPassword = await comparePassword(password, user.password);
    if (!matchPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = await new Promise((resolve, reject) => {
      jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        }
      );
    });
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: { id: user._id, displayName: user.displayName, email: user.email, role:user.role },
      auth: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in login",
      error: error.message || "Internal Server Error",
    });
  }
};

export const getAllUsers = async (req, res) => {
try {
  const users =  await userModel.find();
res.status(200).json(users)

} catch (error) {
  res.status(500).json({message:"Server error. Could not fetch users."})
}

}