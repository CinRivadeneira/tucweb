const mongoose = require("mongoose");
const url = "mongodb://localhost/app";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open",() => {
    console.log("BD conectada");
})