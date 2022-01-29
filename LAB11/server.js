const express = require("express");
const path = require("path");
const url = require("url");

var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/calculator", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/add.html"));
});

app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});

app.use("/result", (req, res, next) => {
  switch (req.body.operator) {
    case "add":
      var sum = parseInt(req.body.first) + parseInt(req.body.second);
      break;
    case "sub":
      var sum = parseInt(req.body.first) - parseInt(req.body.second);
      break;
    case "multiply":
      var sum = parseInt(req.body.first) * parseInt(req.body.second);
      break;
    case "divide":
      var sum = parseInt(req.body.first) / parseInt(req.body.second);
      break;

    default:
      break;
  }
  res.send(
    `<div style="text-align: center; margin-top: 50px;">
    <h1>The Answer is: ${sum}</h1>
    <a href="/calculator">Another calculation</a>
    </div>`
  );
});

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
