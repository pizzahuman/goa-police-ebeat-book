const express = require('express');
const { createcrime,calculateCrimeRating} = require('../Controllers/crime.controller');
const crimeRouter = express.Router();


// crimeRouter.get('/crime/:id',findcrimeById)
// crimeRouter.get('/crime',findcrimeByName)
crimeRouter.get('/crime/calculatecrimerating',calculateCrimeRating)

crimeRouter.post('/crime',createcrime)
// crimeRouter.put('/crime/:id',updatecrime)


module.exports = crimeRouter;