const mongoose = require('mongoose');


const banks_and_post_office_Schema = new mongoose.Schema({
  office_name: {
    type:String,
    required:true
  },
  location: {
    type:String,
    required:true
  },
  phone_number:{
    type:String,
    required:true
  },
  officer:{
    type:String,
    required:true
  }
});




const banks_and_post_office = mongoose.model('banks_and_post_office', banks_and_post_office_Schema);

module.exports = banks_and_post_office;
