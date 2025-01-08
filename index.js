const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Beso From Egypt and this is my first Node.js App ohhh");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
