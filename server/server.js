import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

import Database from "better-sqlite3";
const db = new Database("database.db");

app.get("/", function (req, res) {
  res.json("hello world");
});

app.get("/submissions", function (req, res) {
  const submissions = db.prepare("SELECT * FROM submissions").all();
  res.json(submissions);
});

app.post("/submissions", function (req, res) {
  const newMessage = req.body;
  const { name, season, status } = newMessage;
  db.prepare(
    `
  INSERT INTO submissions (name, season, status) VALUES (?, ?, ?)
`
  ).run(name, season, status);
  console.log(newMessage);
  res.json(newMessage);
});

app.listen(8080, function () {
  console.log("I am running on 8080");
});
