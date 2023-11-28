const express = require("express");
const path = require("path")
const app = express();

app.get("/", (req, res) => {
    const filepath = path.join(__dirname, "static", "index.html")
    res.sendFile(filepath);
})

app.listen(3000, () => {
    console.log("serverが起動した")
})