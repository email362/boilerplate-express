const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const express = require("express");
let app = express();
console.log("Hello World");

const publicPath = __dirname + '/public';

app.use(bodyParser.urlencoded({extended: false}));

app.use('/public',express.static(publicPath));

app.use( (req, res, next) => {
  const httpMethod = req.method;
  const relativePath = req.path;
  const ipAddr = req.ip;
  console.log(`${httpMethod} ${relativePath} - ${ipAddr}`);
  next();
});

app.get('/:word/echo', (req, res) => {
  const {word} = req.params;
  res.json({echo: word});
})

app.post('/name', (req, res) => {
  const {first, last} = req.body;
  res.json({
    name: `${first} ${last}`
  });
});

app.get('/name', (req, res) => {
  const {first,last} = req.query;
  res.json({
    name: `${first} ${last}`
  });
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time: req.time});
});

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
