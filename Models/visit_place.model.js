const mongoose = require('mongoose');


const visitPlaceSchema = new mongoose.Schema({
  visit_date:{
    type:Date,
    required:true
  },
  visit_address:{
    type:String,
    required:true
  },
  owner_name:{
    type:String,
    required:true
  },
  number_of_employee:{
    type:Number,
    required:true
  },
  remark:{
    type:String,
    required:true
  }
});




const visitPlace = mongoose.model('visitPlace', visitPlaceSchema);

module.exports = visitPlace;
