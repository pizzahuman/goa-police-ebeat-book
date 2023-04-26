const express = require('express');
const app = express();
const crimeRouter = require("./crime.routes");

app.use(crimeRouter)

module.exports=app
