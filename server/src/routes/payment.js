    import express from "express";
    import { payment, singlePayment } from "../controllers/payment.js";
    const router = express.Router();

    router.post("/create-checkout-session", payment);
    router.post("/create-checkout-session-single-product", singlePayment)
    export default router;
