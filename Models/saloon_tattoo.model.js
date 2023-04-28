const mongoose = require('mongoose');


const saloon_tattoo_Schema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  wroker_numbers:{
    type:Number,
    required:true
  },
  owner_details:{
    type:String,
    required:true
  },
  phone_number:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  permission_details:{
    type:String,
    required:true
  }
});




const saloon_tattoo = mongoose.model('saloon_tattoo', saloon_tattoo_Schema);

module.exports = saloon_tattoo;
