import userReview from "../models/userReview.js";
import Product from "../models/product.js";


// Add a User Review for Product 
export const postUserReview = async (req, res) => {
    console.log(  req.body.rating);
    try {
        const newReview = new userReview({
            productId : req.params.id,
            content : req.body.review,
            author : req.body.displayName,
            rating : req.body.rating
        })
       await newReview.save();

    //    Add the review reference to the product 
    await Product.findByIdAndUpdate(req.params.id,{
        $push : {reviews: newReview._id}
    })
    res.json(newReview)
    } catch (error) {
        res.status(500).send(error)
    }
}


// get users review for a product 

export const getUserReview = async (req, res) =>{
    try {
        const reviews = await userReview.find({productId:req.params.id});
        res.json(reviews);
    } catch (error) {
        res.status(500).json(error)
    }
}