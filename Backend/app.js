const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Route = require("./Routes/Route");
const multer = require("multer");
const app = express();
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");
mongoose.connect("mongodb://localhost:27017/placementDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', MONGO_URI => console.log('Connected to Database'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

//For json
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.post("/register", function (req, res) {
  console.log(req.body);

  let tempuser = req.body.email[0];

  const user = new Company({
    name: req.body.name[0],
    email: req.body.email[0],
    number: req.body.phno[0],
    ceo: req.body.ceo[0],
    hr: req.body.hr[0],
    address: req.body.address[0],
    password: req.body.password[0],
    job: [],
  });
  console.log(user);
  user.save();
  res.json({
    msg: "Data received",
  });
});




app.post("/login", function (req, res) {
  let logindatauser = [];
  let logindataadmin = [];
  let name = req.body.email[0];
  let lpassword = req.body.password[0];
  let type = req.body.type[0];
  let a = "";
  console.log(req.body);
  if (type === "student") {
    Student.find({ email: name }, function (err, userfounds) {
      if (userfounds.length === 0 || err) {
        res.send({ err: "incorrect username!!", user: userfounds[0] });
        console.log("incorrect username!!");
      } else if (userfounds[0].password === lpassword) {
        res.send({ err: req.body.type[0], user: userfounds[0] });
        logindatauser = userfounds;
        console.log(logindatauser);
      } else {
        res.send({ err: "incorrect password!!", user: userfounds[0] });
        console.log("incorrect password!!");
      }
    });
  }

  if (type === "company") {
    Company.find({ email: name }, function (err, userfounds) {
      if (userfounds.length === 0 || err) {
        res.send({ err: "incorrect username!!", user: userfounds });
        console.log("incorrect username!!");
      } else if (userfounds[0].password === lpassword) {
        res.send({ err: req.body.type[0], user: userfounds });
        logindataadmin = userfounds;
      } else {
        res.send({ err: "incorrect password!!", user: userfounds });
        console.log("incorrect password!!");
      }
    });
  }

  if (type === "tpo") {
    Tpo.find({ email: name }, function (err, userfounds) {
      console.log("tpofound");
      if (userfounds.length === 0 || err) {
        res.send({ err: "incorrect username!!", user: userfounds });
        console.log("incorrect username!!");
      } else if (userfounds[0].password === lpassword) {
        res.send({ err: req.body.type[0], user: userfounds });
        logindataadmin = userfounds;
      } else {
        res.send({ err: "incorrect password!!", user: userfounds });
        console.log("incorrect password!!");
      }
    });
  }
});

app.get("/tpodata", async (req, res) => {
  let slen = await Student.find({ status: "accept" });
  slen = slen.length;
  let clen = await company.find();
  clen = clen.length;
  res.json({
    slen: slen,
    clen: clen,
  });
});

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
