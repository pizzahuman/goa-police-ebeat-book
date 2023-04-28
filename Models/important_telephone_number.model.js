const mongoose = require('mongoose');


const impt_tele_numberSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  phone_number:{
    type:String,
    required:true
  }
});




const impt_tele_number = mongoose.model('impt_tele_number', impt_tele_numberSchema);

module.exports = impt_tele_number;
