import express, { response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

import Database from "better-sqlite3";
const db = new Database("database.db");

app.get("/", function (req, res) {
  res.json("hello world");
});

app.get("/books", function (req, res) {
  const reviews = db.prepare("SELECT * FROM reviews").all();
  res.json(reviews);
});

app.post("/books", function (req, res) {
  const newMessage = req.body;
  const { name, review } = newMessage;
  db.prepare(
    `
  INSERT INTO reviews (name, review) VALUES (?, ?)
`
  ).run(name, review);
  console.log(newMessage);
  res.json(newMessage);
});

app.listen(8080, function () {
  console.log("I am running on 8080");
});
