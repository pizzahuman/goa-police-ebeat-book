const mongoose = require('mongoose');


const workshipCentreSchema = new mongoose.Schema({
  centre_name:{
    type:String,
    required:true
  },
  centre_location:{
    type:String,
    required:true
  },
  memeber_name:{
    type:String,
    required:true
  },
  memeber_phone_number:{
    type:String,
    required:true
  },
  memeber_address:{
    type:String,
    required:true
  }
});




const workshipCentre = mongoose.model('workshipCentre', workshipCentreSchema);

module.exports = workshipCentre;
