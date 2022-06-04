const express = require("express");
const app = express();
const path = require("path");
var router = express.Router();
const Middleware = require("./Middleware");

//Port
const port = 5000;
app.use(express.json());

app.use(Middleware);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname + "/Home.html"));
});
app.get("/Services", (req, res) => {
  res.sendFile(path.join(__dirname + "/Services.html"));
});
app.get("/Contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/Contact.html"));
});

app.listen(port, (error) => {
  if (error) {
    console.log("server failed");
  } else {
    console.log(`server is running on port ${port} `);
  }
});
