const mongoose = require('mongoose');


const medical_shop_Schema = new mongoose.Schema({
  medical_shop_name:{
    type:String,
    required:true
  },
  wroker_numbers:{
    type:Number,
    required:true
  },
  manager_address:{
    type:String,
    required:true
  },
  manager_phone_number:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  manager_name:{
    type:String,
    required:true
  }
});




const medical_shop = mongoose.model('petrol_pump', medical_shop_Schema);

module.exports = medical_shop;
