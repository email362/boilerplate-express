const dotenv = require("dotenv").config();
const express = require("express");
let app = express();
console.log("Hello World");

const publicPath = __dirname + '/public';

app.use('/public',express.static(publicPath));

app.get("/json", (req, res) => {
  const isUpper = process.env.MESSAGE_STYLE === "uppercase";
  let returnObj = { "message": "Hello json" };
  if (isUpper) {
    returnObj.message = returnObj.message.toUpperCase();
  }
  res.json(returnObj);
});

app.get("/", (req, res) => {
  const htmlFile = __dirname + '/views/index.html';
  res.sendFile(htmlFile);
});





















module.exports = app;
