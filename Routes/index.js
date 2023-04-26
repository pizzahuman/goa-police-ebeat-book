const express = require('express');
const app = express();
const crimeRouter = require("./crime.routes");
const userRouter = require('./user.routes');

app.use(crimeRouter)
app.use(userRouter)
module.exports=app
