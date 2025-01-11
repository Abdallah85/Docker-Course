const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Beso From Egypt and this is my first Node.js App ohhh");
});

app.get("/about", (req, res) => {
  res.send("I am a full stack developer");
});

app.get("/contact", (req, res) => {
  res.send("You can contact me afhfht 01100764196");
});

app.get("/Home", (req, res) => {
  res.send("Welcome to my home page");
});

app.get("/services", (req, res) => {
  res.send("I am a full stack developer fffff");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
