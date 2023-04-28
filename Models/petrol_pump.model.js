const mongoose = require('mongoose');


const petrol_pump_Schema = new mongoose.Schema({
  petrol_pump_name:{
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




const petrol_pump = mongoose.model('petrol_pump', petrol_pump_Schema);

module.exports = petrol_pump;
