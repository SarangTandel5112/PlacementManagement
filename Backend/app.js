const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Route = require("./Routes/Route");
// const multer = require("multer");
const app = express();
// const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("process");
mongoose.connect("mongodb://localhost:27017/placementDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//For json
// app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json())

// app.use(express.urlencoded());
app.use("/", Route);

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
