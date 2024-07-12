import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})


const Categories = mongoose.model("categories", categorySchema);

export default Categories;