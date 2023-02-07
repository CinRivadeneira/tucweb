const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./route/UserRoute");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(userRoute);

module.exports = app;