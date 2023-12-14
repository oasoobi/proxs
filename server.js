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

app.get("/data/verifyed", (req, res) => {
  const filepath = path.join(__dirname, "static", "data/verifyed.json");
  res.sendFile(filepath);
});

app.get("/data/unverifyed", (req, res) => {
  const filepath = path.join(__dirname, "static", "data/unverifyed.json");
  res.sendFile(filepath);
});

app.get("/data/y/all", (req, res) => {
  const filepath = path.join(__dirname, "static", "data/youtube/all.json");
  res.sendFile(filepath);
});

app.get("/data/y/verifyed", (req, res) => {
  const filepath = path.join(__dirname, "static", "data/youtube/verifyed.json");
  res.sendFile(filepath);
});

app.get("/data/y/unverifyed", (req, res) => {
  const filepath = path.join(
    __dirname,
    "static",
    "data/youtube/unverifyed.json",
  );
  res.sendFile(filepath);
});

app.listen(3000, () => {
  console.log("サーバーが起動した");
});
