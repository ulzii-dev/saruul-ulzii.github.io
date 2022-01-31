const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();

app.set(path.join(__dirname, "./views"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));

const question = {
  1: "3, 1, 4, 1, 5",
  2: "1, 1, 2, 3, 5",
  3: "1, 4, 9, 16, 25",
  4: "2, 3, 5, 7, 11",
  5: "1, 2, 4, 8, 16",
};

const answer = {
  1: 9,
  2: 8,
  3: 36,
  4: 13,
  5: 32,
};

app.get("/", (req, res) => {
  res.render("quiz", {
    question: question[1],
    score: 0,
    quiz: 1,
  });
});

app.post("/", (req, res) => {
  var quiz = parseInt(req.body.quiz) + 1;
  var score = parseInt(req.body.score);
  if (req.body.answer == answer[req.body.quiz]) {
    score++;
  }

  res.render("quiz", {
    question: question[quiz],
    score: score,
    quiz: quiz,
  });
});

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
