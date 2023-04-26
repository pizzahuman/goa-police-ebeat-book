const mongoose = require('mongoose');


const gado_cart_Schema = new mongoose.Schema({
 
  remark:{
    type:String,
    required:true
  },
  owner_phone_number:{
    type:String,
    required:true
  },
  owner_name:{
    type:String,
    required:true
  },
  check_data:{
    type:Date,
    required:true
  },
  worker_number:{
    type:Number,
    required:true
  }
  
});




const gado_cart = mongoose.model('guesthouse_hotel_res', gado_cart_Schema);

module.exports = gado_cart;
