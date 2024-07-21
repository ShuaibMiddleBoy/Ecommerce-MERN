import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoDB from "./config/__db.js";
import user from "./routes/user.js";
import product from "./routes/product.js";
import payment from "./routes/payment.js";
import GoogleAuth from "./routes/googleAuth.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import session from "express-session";
import passport from "./config/passport.js";
import categoryRoutes from "./routes/category.js"
import userReviewroutes from "./routes/userReview.js"

mongoDB();
const PORT = process.env.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

const allowedOrigins = [
    'http://localhost:5173',
  'http://127.0.0.1:5173'
]



app.use(
  cors({
    origin: function(origin, callback) {
      if(!origin || allowedOrigins.indexOf(origin) !== -1){
        callback(null, true)
      }else{
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/auth", user);
app.use("/api/products", product);
app.use("/api/categories", categoryRoutes);
app.use("/api", payment);
app.use("/auth", GoogleAuth);
app.use("/api", userReviewroutes)

app.use(express.static(path.join(__dirname, "../images")));

app.listen(PORT, () => {
  console.log(`Server start at port no ${PORT}`);
});
