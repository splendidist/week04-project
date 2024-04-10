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

app.get("/books", function (req, res) {
  res.json("hello world");
});

app.listen(8080, function () {
  console.log("I am running on 8080");
});
