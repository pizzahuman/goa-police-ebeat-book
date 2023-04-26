const mongoose = require('mongoose');


const busStandSchema = new mongoose.Schema({
  stand_name:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  }
});




const busStand = mongoose.model('busStand', busStandSchema);

module.exports = busStand;
