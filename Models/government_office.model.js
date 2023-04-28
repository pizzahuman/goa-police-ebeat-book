const mongoose = require('mongoose');


const governmentOfficeSchema = new mongoose.Schema({
  office_name:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  phone_number:{
    type:String,
    required:true
  },
  officer_incharge:{
    type:String,
    required:true
  }
});




const governmentOffice = mongoose.model('governmentOffice', governmentOfficeSchema);

module.exports = governmentOffice;
