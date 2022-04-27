const Company = require("../Models/Company");
const Job = require("../Models/Job");
const Student = require("../Models/Student");
const Tpo = require("../Models/Tpo");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const Unverifiedstudent = require("../Models/Unverifiedstudent");
const Unverifiedcompany = require("../Models/UnverifiedCompany");

class LoginController {
  static loginFunction = (req, res) => {
    try {
      let name = req.body.email[0];
      let lpassword = req.body.password[0];
      let type = req.body.type[0];
      if (type === "student") {
        try {
          Student.find({ email: name }, async function (err, userfounds) {
            if (userfounds.length === 0 || err) {
              Unverifiedstudent.find({ email: name }, (err, unverified) => {
                if (unverified.length != 0) {
                  console.log("verify your email");
                  res.send({ err: "Please Verify Your Email!!", user: unverified });
                }
                else {
                  res.send({ err: "incorrect username!!", user: userfounds });
                }
              })
            }
            else if (userfounds[0].password === lpassword) {
              req.session.user = "Student";
              req.session.userid = userfounds[0]._id;
              const a = await jwt.sign({ id: userfounds[0]._id, email: userfounds[0].email, type: "Student" }, process.env.SECRET_KEY)
              res.cookie("login", a)
              res.send({ err: req.body.type[0], user: userfounds[0] });
            } else {
              res.send({ err: "incorrect password!!", user: userfounds[0] });
            }
          });
        }
        catch (err) {
          console.log(err);
        }
      }

      if (type === "company") {
        try {
          Company.find({ email: name }, async function (err, userfounds) {
            if (userfounds.length === 0 || err) {
              Unverifiedcompany.find({ email: name }, (err, unverified) => {
                if (unverified.length != 0) {
                  console.log("verify your email");
                  res.send({ err: "Please Verify Your Email!!", user: unverified });
                }
                else {
                  res.send({ err: "incorrect username!!", user: userfounds });
                }
              })
            }
            else if (userfounds[0].password === lpassword) {
              req.session.user = "Company";
              req.session.userid = userfounds[0]._id;
              const a = await jwt.sign({ id: userfounds[0]._id, email: userfounds[0].email, type: "Company" }, process.env.SECRET_KEY)
              res.cookie("login", a)
              res.send({ err: req.body.type[0], user: userfounds });
            }
            else {
              res.send({ err: "incorrect password!!", user: userfounds });
            }
          });
        }
        catch (error) {
          console.log("error in company signin", error);
        }
      }

      if (type === "tpo") {
        try {
          Tpo.find({ email: name }, function (err, userfounds) {
            if (userfounds.length === 0 || err) {
              res.send({ err: "incorrect username!!", user: userfounds });
            } else if (userfounds[0].password === lpassword) {
              req.session.user = "Tpo";
              req.session.userid = userfounds[0]._id;
              res.send({ err: req.body.type[0], user: userfounds });
            } else {
              res.send({ err: "incorrect password!!", user: userfounds });
            }
          });
        }
        catch (error) {
          console.log("error in tpo login", error);
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  };


  static getTpoData = async (req, res) => {
    let slen = await Student.find({ status: "Accpted" });
    slen = slen.length;

    let clen = await Company.find();
    clen = clen.length;
    let students = await Student.find();
    students = students.filter((std) => {
      return std.status === "Accpted";
    });
    students = students.map((std) => {
      return {
        name: std.name,
        myapply: std.myapply,
      };
    });

    let result = [];
    for (let i = 0; i < students.length; i++) {
      let studentapply = students[i].myapply;
      let studentname = students[i].name;
      for (let j = 0; j < studentapply.length; j++) {
        let object = {
          name: studentname,
          jobdetails: {
            jobid: studentapply[j].jobid,
            status: studentapply[j].status,
          },
        };
        result.push(object);
      }
    }

    result = result.filter((obj) => {
      return obj.jobdetails.status === true;
    });

    let finalResult = [];
    for (let i = 0; i < result.length; i++) {
      let jobid = result[i].jobdetails.jobid;
      let job = await Job.findById(jobid);

      let obj = {
        studentName: result[i].name,
        jobtitle: job.jobTitle,
        ctc: job.ctcRange,
        companyname: job.compname,
      };
      finalResult.push(obj);
    }

    res.json({
      slen: slen,
      clen: clen,
      placedlen: finalResult.length,
    });
  };

  static logout = async (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.send({ error: "Logout error" });
      }
      req.session = null;
      res.clearCookie("DDUPLACEMENT", { path: "/" });
      return res.send({ clearSession: "success" });
    });
  };
  static isloggedin = (req, res) => {
    const a = req.cookies.login
    // console.log(a);
    const user = (jwt.verify(a, "mynameissarangtandel"));
    // console.log(user);
    if (req.session.userid) {
      res.json({ loggedin: true, user: req.session.user, user1: user.type });

    } else {
      res.json({ loggedin: false });
    }
  };

  static getstudentstpo = async (req, res) => {
    let students = await Student.find({ status: "Accpted" });
    students = students.map((std) => {
      return {
        name: std.name,
        email: std.email,
        branch: std.branch,
        cgpa: std.cgpa,
        resumename: std.resumename,
      };
    });

    res.send(students);
  };
  static getcompaniestpo = async (req, res) => {
      
    companies = companies.map((std) => {
      return {
        name: std.name,
        email: std.email,
        number: std.number,
        address: std.address,
        ceo: std.ceo,
        hr: std.hr,
      };
    });

    res.send(companies);
  };
  static getjobofferedtpo = async (req, res) => {
    let students = await Student.find();
    students = students.filter((std) => {
      return std.status === "Accpted";
    });
    students = students.map((std) => {
      return {
        name: std.name,
        myapply: std.myapply,
      };
    });

    let result = [];
    for (let i = 0; i < students.length; i++) {
      let studentapply = students[i].myapply;
      let studentname = students[i].name;
      for (let j = 0; j < studentapply.length; j++) {
        let object = {
          name: studentname,
          jobdetails: {
            jobid: studentapply[j].jobid,
            status: studentapply[j].status,
          },
        };
        result.push(object);
      }
    }

    result = result.filter((obj) => {
      return obj.jobdetails.status === true;
    });

    let finalResult = [];
    for (let i = 0; i < result.length; i++) {
      let jobid = result[i].jobdetails.jobid;
      let job = await Job.findById(jobid);

      let obj = {
        studentName: result[i].name,
        jobtitle: job.jobTitle,
        ctc: job.ctcRange,
        companyname: job.compname,
      };
      finalResult.push(obj);
    }
    res.send(finalResult);
  };
}

module.exports = LoginController;
/*
app.post("/login", function (req, res) {
  
}); */
