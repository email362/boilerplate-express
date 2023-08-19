const express = require("express");
let app = express();
console.log("Hello World");

const publicPath = __dirname + '/public';

app.use('/public',express.static(publicPath));

app.get("/json", (req, res) => {
  const returnObj = { "message": "Hello json" };
  res.json(returnObj);
});

app.get("/", (req, res) => {
  const htmlFile = __dirname + '/views/index.html';
  res.sendFile(htmlFile);
});





















module.exports = app;
