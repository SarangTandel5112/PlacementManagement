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

  const user = new company({
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

let logindatauser = [];
let logindataadmin = [];

app.post("/login", function (req, res) {
  var name = req.body.email[0];
  var lpassword = req.body.password[0];
  var type = req.body.type[0];
  var a = "";
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
    company.find({ email: name }, function (err, userfounds) {
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

/* /////////////////////////////////////////////////////////////////////////////////// */

/* When Company want to add new Job */

app.post("/requestToAddJob", function (req, res) {
  const newJob = new Job({
    jobTitle: req.body.title[0],
    jobDescription: req.body.description[0],
    numberOfOpening: req.body.numberOfOpening[0],
    ctcRange: req.body.ctcRange[0],
    jobLocation: req.body.jobLocation[0],
    status: "waiting",
    deadline: req.body.deadline[0],
    candidates: [],
    timestatus: "active",
  });

  newJob.save();

  res.json({ status: "OK" });
});



app.post("/getIncomingRequest", function (req, res) {
  Job.find({ status: "waiting" }, function (err, jobfound) {
    if (err) {
      res.json({ status: "error", error: err });
    } else {
      res.send({ alljob: jobfound });
      console.log(jobfound);
    }
  });
});

app.post("/settimestatus", function (req, res) {
  Job.find({ _id: req.body.jid }, function (err, timeuser) {
    timeuser[0].timestatus = "timeout";
    timeuser[0].save();
  });
});

app.post("/getAvailableJobForStudent", function (req, res) {
  Job.find(
    { status: "accepted", timestatus: "active" },
    function (err, jobfound) {
      console.log(jobfound);
      if (err) {
        res.json({ status: "error" });
      } else {
        res.send({ alljob: jobfound });
      }
    }
  );
});

app.post("/AcceptJobRequest", (req, res) => {
  Job.findOneAndUpdate(
    { _id: req.body.job_id },
    { status: "accepted" },
    function (err, success) {
      if (err) {
        res.json({ status: "error", error: err });
        console.log(err);
      } else {
        res.json({ status: "OK" });
        console.log(success);
      }
    }
  );
});


app.post("/RejectJobRequest", (req, res) => {
  Job.findOneAndUpdate(
    { _id: req.body.job_id },
    { status: "rejected" },
    function (err, success) {
      if (err) {
        res.json({ status: "error", error: err });
        console.log(err);
      } else {
        res.json({ status: "OK" });
        console.log(success);
      }
    }
  );
});

app.post("/GetAllJobsOfCompany", (req, res) => {
  Job.find({ company_id: req.body.company_id }, function (err, data) {
    if (err) {
      res.json({ status: "error", error: err });
    } else {
      res.json({ status: "ok", jobs: data });
    }
  });
});



app.post("/addStudentToJob", (req, res) => {
  Job.findOneAndUpdate(
    { _id: req.body.job_id },
    { $push: { candidates: req.body.student_email } },
    function (err, success) {
      if (err) {
        console.log(err);
      } else {
        console.log(success);
        res.json({ status: "ok" });
      }
    }
  );
});





/* ////////////////////////////////////////////////////////////////////////////////// */

app.post("/tpoRequestedJobs", function (req, res) {
  Job.find({}, function (err, data) {
    const requestedJobs = data.filter((job) => job.status === "waiting");
    console.log("requestedJobs", requestedJobs);

    res.send({ data: requestedJobs });
    console.log(data);
  });
});

var tid;
var tname;
app.post("/setdetails", function (req, res) {
  tid = req.body.jid;
  tname = req.body.jname;
  console.log(tid, tname);
  Job.find({ _id: tid }, function (err, redfound) {
    console.log(redfound);
    console.log(redfound[0].status);
    redfound[0].status = tname;
    redfound[0].save();
  });
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
