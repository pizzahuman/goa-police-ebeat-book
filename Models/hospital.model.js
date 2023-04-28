const mongoose = require('mongoose');


const hospital_Schema = new mongoose.Schema({
  hospital_name:{
    type:String,
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




const hospital = mongoose.model('hospital', hospital_Schema);

module.exports = hospital;
