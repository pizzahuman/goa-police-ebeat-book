const mongoose = require('mongoose');


const spaMassageSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  wroker_numbers:{
    type:Number,
    required:true
  },
  owner_details:{
    type:String,
    required:true
  },
  phone_number:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  permission_details:{
    type:String,
    required:true
  }
});




const spaMassage = mongoose.model('spaMassage', spaMassageSchema);

module.exports = spaMassage;
