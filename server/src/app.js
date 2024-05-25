import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoDB from "./DB/__db.js";
import user from "./routes/user.js";
import cors from "cors";

mongoDB();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", user);

app.listen(PORT, () => {
  console.log(`Server start at port no ${PORT}`);
});
