const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    police_id: {
        type: String,
        unique:true,
        required: true,
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    fingerPrint:{
        type:String
    },
    token:{
        type:String,
    },
    otp: {
        code: {
          type: String,
        },
        expiresAt: {
          type: Date,
        },
      }
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);