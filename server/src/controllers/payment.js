import Stripe from "stripe";

const stripe = new Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

export const payment = async (req, res) => {
  const { products } = req.body;
  const line_items = products.map((product) => ({
    price_data: {
      currency: "pkr",
      product_data: {
        name: product.title,
      },
      unit_amount: product.totalPrice * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/error",
  });
  res.json({ id: session.id });
};

export const singlePayment = async (req, res) => {
  const { products } = req.body;

  const line_items = products.map((product) => ({
    price_data: {
      currency: "pkr",
      product_data: {
        name: product.productTitle,  // Ensure this matches your product data structure
      },
      unit_amount: Math.round(product.productPrice * 100),  // Convert to cents and ensure it's an integer
    },
    quantity: product.quantity,
  }));


  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/error",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
