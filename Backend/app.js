const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Route = require("./Routes/Route"); 
const session = require('express-session');
const cookieParser=require("cookie-parser")
const cors=require('cors')



const fileUpload=require("express-fileupload");
const { tpoRequestedJobs } = require("./Controllers/JobController");


// const multer = require("multer");
const app = express();
// const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("process");
mongoose.connect("mongodb://localhost:27017/placementDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then("Connected to MongoDb");
app.use(cookieParser())
app.use(fileUpload())




app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true,
  exposedHeaders: ['Set-cookie']
}));
app.use(session({
  name:"DDUPLACEMENT",
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie:{user:"Punit"}    
}));
//For json
// app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json())

app.use(express.urlencoded({extended:false}));
app.use("/", Route);

app.listen(5000, () => {
  console.log("Server started at port 5000")
  ;
  
});
