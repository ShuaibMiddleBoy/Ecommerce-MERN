import mongoose from "mongoose";


const userReviewSchema = new mongoose.Schema({
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product',
        required : true
    },
    content : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        min : 1,
        max : 5
    },
    createdAt:{
type : Date,
default : Date.now
    }
})

const userReviewModel = new mongoose.model("user_review", userReviewSchema)

export default userReviewModel;