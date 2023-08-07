const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require ("request");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/", function (req, res) {
  var firstName = req.body.fName;
  var firstName = req.body.lName;
  var firstName = req.body.email;

  const data = {
    
  }
});
app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});



// API Key
// 8bbc3e7d1b39de8f8791aec3fcfb0c85-us21
// d0985dcdc5