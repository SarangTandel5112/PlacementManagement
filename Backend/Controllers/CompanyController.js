const Company = require("../Models/Company");
const path = require('path');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken")

class CompanyController {
  static registerCompany = async (req, res) => {
    try {
      if (req.files === null) {
        res.status(400).json({ msg: 'No file Uploaded' })
      } else {
        const file = req.files.file;
        const fileName = Date.now() + file.name;
        const user = new Company({
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
        try {
          const a = jwt.sign({ ...user }, "mynameissarangtandel")
          // console.log(jwt.verify(a, "mynameissarangtandel"));
          try {
            let mailTransporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'sarang.tandel.sa@gmail.com',
                pass: 'Sarang@5112'
              }
            });
            let mailDetails = {
              from: 'sarang.tandel.sa@gmail.com',
              to: user.email,
              subject: 'Verification of your account',
              html: `<h1 style="text-align: center;">Verify Your Account</h1> http://localhost:5000/verify/${a}           
              <h3 style="text-align: center;">Thank You</h3>`
            };
            mailTransporter.sendMail(mailDetails, function (err, data) {
              if (err) {
                console.log('Error Occurs');
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

        // user.save();
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
  static otpverify = async (req, res) => {
    console.log(req.body.number);
  }

  static emailverify=async(req,res)=>{
    try {
      const data=req.params.id
      const user=(jwt.verify(data,"mynameissarangtandel"));
      console.log(user._doc);
       res.send("Thank you for verifing")
    } catch (error) {
      console.log("error occurs in data verify");
    }    
  }
}
module.exports = CompanyController;