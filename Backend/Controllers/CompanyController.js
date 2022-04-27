const Company = require("../Models/Company");
const path = require('path');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const Unverifiedcompany = require("../Models/UnverifiedCompany");

class CompanyController {
  static registerCompany = async (req, res) => {
    try {
      if (req.files === null) {
        res.status(400).json({ msg: 'No file Uploaded' })
      }
      else {
        const file = req.files.file;
        const fileName = Date.now() + file.name;
        const user = new Unverifiedcompany({
          name: req.body.name,
          email: req.body.email,
          number: req.body.phno,
          ceo: req.body.ceo,
          hr: req.body.hr,
          address: req.body.address,
          password: req.body.password,
          jobsposted: [],
          imagepath: fileName
        });
        user.save();
        try {
          const a = await jwt.sign({ ...user }, process.env.SECRET_KEY)
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
              html: `<h1 style="text-align: center;">Verify Your Account</h1> http://localhost:5000/verify/${a}           
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
        }
        catch (error) {
          console.log("error in token");
        }
        res.json({
          msg: "Data received",
        });
        file.mv(path.join(__dirname, `/../../public/Photos/Files/clogo/${fileName}`))
      }
    } catch (error) {
      res.status(401).send("Error")
      console.log(error);
    }
  }

  static emailverify = async (req, res) => {
    try {
      const data = req.params.id
      const user = await jwt.verify(data, process.env.SECRET_KEY);
      const checkuser = await Company.findOne({ _id: user._doc._id })
      if (checkuser) {
        res.send("you are verified please login")
      }
      else {
        const verified = new Company({
          ...user._doc
        })
        verified.save();
      }
      Unverifiedcompany.remove({ _id: user._doc._id }, (err) => {
        if (err) {
          console.log(err);
        }
      });
      res.redirect("http://localhost:3000/login")
    } catch (error) {
      console.log("error occurs in data verify");
    }
  }

  static checkemail = async (req, res) => {
    try {
      const result = req.body.email;
      const isMatch = await Company.findOne({ email: result })
      if (isMatch) {
        console.log("mailID alrerady exist!");
        res.send({ data: false })
      }
      else {
        console.log("continue");
        res.send({ data: true })
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}
module.exports = CompanyController;