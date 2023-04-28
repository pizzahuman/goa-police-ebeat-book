const mongoose = require('mongoose');


const checkingReportSchema = new mongoose.Schema({
 mv_cases:{
  Day1:{
    type:Number
  },
  Day2:{
    type:Number
  },
  Day3:{
    type:Number
  },
  Day4:{
    type:Number
  },
  Day5:{
    type:Number
  },
  Day6:{
    type:Number
  },
  Day7:{
    type:Number
  }
 },
 mv_cases:{
  Day1:{
    type:Number
  },
  Day2:{
    type:Number
  },
  Day3:{
    type:Number
  },
  Day4:{
    type:Number
  },
  Day5:{
    type:Number
  },
  Day6:{
    type:Number
  },
  Day7:{
    type:Number
  }
 }
});




const checkingReport = mongoose.model('checkingReport', checkingReportSchema);

module.exports = checkingReport;
