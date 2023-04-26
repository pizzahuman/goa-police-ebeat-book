const mongoose = require('mongoose');


const educationCentreSchema = new mongoose.Schema({
  centre_name:{
    type:String,
    required:true
  },
  centre_location:{
    type:String,
    required:true
  },
  head_name:{
    type:String,
    required:true
  },
  centre_phone_number:{
    type:String,
    required:true
  },
  for:{
    type:String,
    required:true
  }
});




const educationCentre = mongoose.model('educationCentre', educationCentreSchema);

module.exports = educationCentre;
