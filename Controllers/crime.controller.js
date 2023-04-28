const express = require('express');
const router = express.Router();
const Crime = require('../Models/crime.model');
const httpStatusCodes = require("../constants/http-status-codes")
const { formResponse } = require('../helpers/response');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

exports.calculateCrimeRating=async(req,res)=>{
    // Define the bounding box for the area
    const area=req.body;
  const bbox = [
    [area.minLng, area.minLat],
    [area.maxLng, area.maxLat]
  ];

  // Find all crimes within the bounding box
  const crimes=await Crime.find({
    location: {
      $geoWithin: {
        $box: bbox
      }
    }
  });
  if (crimes.length === 0) {
    return  res.status(httpStatusCodes[404].code)
    .json(formResponse(httpStatusCodes[404].code,"No crime available in this area"))
  }

  // Calculate the average score of the crimes in the area
  const totalScore = crimes.reduce((acc, crime) => acc + crime.score, 0);
  const avgScore = totalScore / crimes.length;

  // Assign a rating based on the average score
  let rating = '';
  if (avgScore <= 2) {
    rating = 'Low';
  } else if (avgScore <= 7) {
    rating = 'Moderate';
  } else {
    rating = 'High';
  }
  return  res.status(httpStatusCodes[200].code)
  .json(formResponse(httpStatusCodes[200].code,{
    "message":`Crime rating for area ${area.name} is ${rating}`,
    "rating":rating,
    "score":avgScore
  }))

}
exports.createcrime=async(req,res)=>{
    const description = req.body.description;
    const lat = req.body.lat;
    const lng = req.body.lng;
    // const score = sentiment.analyze(description).score;
    // console.log(score)
    // const crimeScore =Math.max(Math.min(Math.round((score + 5) / 10 * 10), 10), 0);
    try {
        const crime=await Crime.create({  description: description,
            score: req.body.score,
            location: {
              type: 'Point',
              coordinates: [lng, lat],
            }});
            return  res.status(httpStatusCodes[200].code)
            .json(formResponse(httpStatusCodes[200].code,crime))
    } catch (error) {
        return  res.status(httpStatusCodes[400].code)
            .json(formResponse(httpStatusCodes[400].code))
    }
  
   
}