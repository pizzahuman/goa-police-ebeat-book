const mongoose = require('mongoose');


const beatOfficerSchema = new mongoose.Schema({
  designation:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  buckle_number:{
    type:Number,
    required:true
  },
  phone_number:{
    type:String,
    required:true
  },
  beat_area:{
    type:String,
    required:true
  }
});




const beatOfficer = mongoose.model('beatOfficer', beatOfficerSchema);

module.exports = beatOfficer;
