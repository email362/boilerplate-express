import * as express from 'express';
let app = express();
console.log("Hello World");

const publicPath = __dirname + '/public';

app.use('/public',express.static(publicPath));

app.get("/", (req, res) => {
  const htmlFile = __dirname + '/views/index.html';
  res.sendFile(htmlFile);
});

app.get("/json", (req, res) => {
  const returnObj = { "message": "Hello json" };
  res.json(returnObj);
});































 export default app;
