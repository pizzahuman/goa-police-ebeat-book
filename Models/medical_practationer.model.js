const mongoose = require('mongoose');


const medical_practationerSchema = new mongoose.Schema({
  medical_practationer_name:{
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




const medical_practationer = mongoose.model('medical_practationer', medical_practationerSchema);

module.exports = medical_practationer;
