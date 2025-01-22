const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const redis = require("redis");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "none";

const userName = "root";
const password = "example";
const port = "27017";
const host = "mongo";
const MONGO_URL = `mongodb://${userName}:${password}@${host}:${port}`;
const hostRedis = 'redis';

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
redis.createClient({
  url: `redis://${hostRedis}:6380`,
});
app.get("/", (req, res) => {
  res.send("Hello Abdallah From Egypt and this is my first Node.js App ohhh");
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

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} and on port: ${PORT}`);
});
