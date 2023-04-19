require("./config/db/mongo");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const app = express();



// , credentials: true
app.use(bodyParser.urlencoded({ extended: true }));
// { origin: ['http://localhost:3000', 'https://docmeets.com', 'https://docmeets.netlify.app','https://docmeets-nextjs-app.netlify.app/' ,'https://docmeets-dev.netlify.app', 'https://docmeets-doctor-dashboard.netlify.app','https://docmeets.onrender.com'] }

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());


//require routes
const apiRoutes = require('./Routes/index');
app.use('/', apiRoutes);

setInterval(function () {
    console.log("pinged");
}, 600000)

app.get("/", (req, res) => {
    res.send(`app working ` + new Date().toLocaleTimeString());
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;


