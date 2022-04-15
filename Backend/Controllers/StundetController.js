const Job = require("../Models/Job");
const path = require('path');
const Student = require("../Models/Student");
const Unverifiedstudent = require("../Models/Unverifiedstudent")
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer');

class StudentController {
  static register = (req, res) => {
    try {
      if (req.files === null) {
        res.status(400).json({ msg: 'No file Uploaded' })
      } else {
        const file = req.files.file;
        const fileName = Date.now() + file.name;
        const user = new Unverifiedstudent({
          name: req.body.name,
          email: req.body.email,
          phno: req.body.phno,
          collegename: req.body.collegename,
          branch: req.body.branch,
          cgpa: req.body.cgpa,
          password: req.body.password,
          jobsposted: [],
          resumename: fileName,
          status: "Pending"
        });
        const a = jwt.sign({ ...user }, process.env.SECRET_KEY);
        try {
          let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASS
            }
          });
          let mailDetails = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Verification of your account',
            html: `<h1 style="text-align: center;">Verify Your Account</h1> http://localhost:5000/verifystudent/${a}           
          <h3 style="text-align: center;">Thank You</h3>`
          };
          mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
              console.log(err)
            } else {
              console.log('Email sent successfully');
            }
          });
        } catch (error) {
          console.log("error while sending mail", error);
        }
        user.save();
        res.json({
          msg: "Data received",
        });
        file.mv(path.join(__dirname, `/../../public/Photos/Files/sresume/${fileName}`))
      }
    }
    catch (error) {
      console.log("error in fetching student data");
    }
  }


  static emailverifystudent = async (req, res) => {
    try {
      console.log("std");
      const data = req.params.id
      const user = (jwt.verify(data, process.env.SECRET_KEY));
      console.log(user._doc);
      const verified = new Student({
        ...user._doc
      })
      verified.save();
      res.redirect("http://localhost:3000/login")
    } catch (error) {
      console.log("error occurs in data verify");
    }
  }



  static studentreqtpo = (req, res) => {
    Student.find({ status: "Pending" }, (err, studentfound) => {
      res.send({ user: studentfound });

    })
  }

  static setStudentStatus = async (req, res) => {
    let id = req.body.val;
    let status = req.body.vid;

    if (status === "accept") {
      Student.findOneAndUpdate(
        { _id: id },
        { status: "Accpted" },
        (err, success) => {
          if (err) {
            res.json({ status: "error" });
          }

        }
        // res.json()
      )
      let pendingStudents = await Student.find({ status: "Pending" });
      res.json(pendingStudents);
    } else if (status === "reject") {
      Student.findOneAndUpdate(
        { _id: id },
        { status: "Rejected" },
        (err, success) => {
          if (err) {
            res.json({ status: "error" });
          }

        }
      )
      let pendingStudents = await Student.find({ status: "Pending" });
      res.json(pendingStudents);
    }
  }

  static getStudentData = (req, res) => {
    Student.find({ _id: req.body.student_id }, function (err, data) {
      if (err) {

      } else {

        res.json({ status: "ok", student: data[0] });
      }
    });
  }

  static updateStudentProfile = (req, res) => {
    Student.findOneAndUpdate(
      { _id: req.body.student_id },
      {
        name: req.body.name,
        cgpa: req.body.cgpa,
        college_id: req.body.college_id,
        branch: req.body.branch,
        resumeLink: req.body.resumeLink,
        linkedin_profile: req.body.linkedin_profile,
        codechef_profile: req.body.codechef_profile,
        leetcode_profile: req.body.leetcode_profile,
      },
      function (err, success) {
        if (err) {
          console.log(err);
        } else {

          res.json({ status: "ok" });
        }
      }
    );

  }


  static studentmyapplies = async (req, res) => {
    let senddata = [];
    let userfound = await Student.find({ _id: req.session.userid })
    try {
      for (let i = 0; i < userfound[0].myapply.length; i++) {
        let jobfound = await Job.find({ _id: userfound[0].myapply[i].jobid })
        senddata.push(jobfound[0])

      }
    }
    catch (err) {
      console.log("Some Error ocuured")
    }
    res.send({ applydata: senddata })
  }


  static applyforcompany = (req, res) => {
    Student.find({ _id: req.session.userid }, (err, userfound) => {
      const obj = {
        jobid: req.body.id,
        status: false
      }
      userfound[0].myapply.push(obj);
      userfound[0].save();
    })
    Job.find({ _id: req.body.id }, (err, userfound) => {
      const obj1 = {
        studentid: req.session.userid,
        status: false,
      }
      userfound[0].candidates.push(obj1)
      userfound[0].save();
    })

  }

  static checkstdmail = async (req, res) => {
    console.log(req.body.email);
    try {
      const std = await Student.findOne({ email: req.body.email })
      if (std) {
        console.log("f");
        res.send({ mailstatus: false })
      }
      else {
        console.log("t");
        res.send({ mailstatus: true })
      }
    } catch (error) {
      console.log("error in finding std email");
      res.status(401).send("Error")
    }
  }
}



module.exports = StudentController;