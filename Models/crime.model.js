const mongoose = require('mongoose');


const crimeSchema = new mongoose.Schema({
  description: String,
  score: Number,
  location: {
    type: { type: String },
    coordinates: [Number],
  },
});


crimeSchema.index({ location: '2dsphere' });



const Crime = mongoose.model('Crime', crimeSchema);

module.exports = Crime;
