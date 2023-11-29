const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  const filepath = path.join(__dirname, "static", "index.html");
  res.sendFile(filepath);
});

app.get("/data/all", (req, res) => {
  const filepath = path.join(__dirname, "static", "data/all.json");
  res.sendFile(filepath);
});

app.get("/none", (req, res) => {
  res.redirect("/");
});
app.get("/data/checked", (req, res) => {
  const filepath = path.join(__dirname, "static", "data/checked.json");
  res.sendFile(filepath);
});

app.get("/data/unchecked", (req, res) => {
  const filepath = path.join(__dirname, "static", "data/unchecked.json");
  res.sendFile(filepath);
});
app.listen(3000, () => {
  console.log("serverが起動した");
});
