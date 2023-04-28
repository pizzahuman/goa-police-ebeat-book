const mongoose = require('mongoose');


const guesthouse_hotel_res_Schema = new mongoose.Schema({
  centre_name:{
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
  centre_location:{
    type:String,
    required:true
  },
  manager_name:{
    type:String,
    required:true
  },
  broading_lodging:{
    type:String,
    required:true
  }
});




const guesthouse_hotel_res = mongoose.model('guesthouse_hotel_res', guesthouse_hotel_res_Schema);

module.exports = guesthouse_hotel_res;
