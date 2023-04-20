const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    police_id: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default:0
    },
    volume:{
        type: String, 
        required: true,
    },
    category_id:{
        type:String,
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);