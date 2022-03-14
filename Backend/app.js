const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Route = require("./Routes/Route"); 
const session = require('express-session');
const cookieParser=require("cookie-parser")
const cors=require('cors')



// const multer = require("multer");
const app = express();
// const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("process");
mongoose.connect("mongodb://localhost:27017/placementDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true,
  exposedHeaders: ['Set-cookie']
}));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
cookie:{user:"Punit"}
  
}));
//For json
// app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json())

app.use(express.urlencoded({extended:false}));
app.use("/", Route);

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
