const Job = require("../Models/Job");
const Student = require("../Models/Student");
const path = require('path')
class StudentController {
  static register = (req, res) => {
    if (req.files === null) {
      res.status(400).json({ msg: 'No file Uploaded' })
    } else {
      const file = req.files.file;
      const fileName = Date.now() + file.name;
      console.log(req.body)

      const user = new Student({
        name: req.body.name,
        email: req.body.email,
        number: req.body.phno,
        collegename: req.body.collegename,
        cgpa: req.body.cgpa,
        password: req.body.password,
        jobsposted: [],
        resumename: fileName,
        status: "Pending"
      });
      user.save();
      res.json({
        msg: "Data received",
      });



      file.mv(path.join(__dirname, `/../../public/Photos/Files/sresume/${fileName}`))

    }




  }

  static studentreqtpo = (req, res) => {
    Student.find({ status: "Pending" }, (err, studentfound) => {
      res.send({ user: studentfound });
      // console.log(studentfound);
    })
  }

  static setStudentStatus = async (req, res) => {
    let id = req.body.val;
    let status = req.body.vid;
    console.log(req.body)
    console.log(status)
    if (status === "accept") {
      Student.findOneAndUpdate(
        { _id: id },
        { status: "Accpted" },
        (err, success) => {
          if (err) {
            res.json({ status: "error" });
          }
          console.log(success)
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
          console.log(success)
        }
      )
      let pendingStudents = await Student.find({ status: "Pending" });
      res.json(pendingStudents);

    }


  }

  static getStudentData = (req, res) => {
    Student.find({ _id: req.body.student_id }, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        // console.log("getStudentData server", data);
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
          console.log(success);
          res.json({ status: "ok" });
        }
      }
    );

  }


  static studentmyapplies = async (req, res) => {
    let senddata = [];
    console.log(req.session.userid);
    let userfound = await Student.find({ _id: req.session.userid })
    // console.log(userfound);
    for (let i = 0; i < userfound[0].myapply.length; i++) {
      let jobfound =await Job.find({ _id: userfound[0].myapply[i] })
      // console.log(jobfound);
      senddata.push(jobfound[0])
      // console.log(senddata);
    }

    res.send({applydata:senddata})

  }


  static applyforcompany = (req, res) => {
    console.log(req.body.id);
    console.log(req.session.userid);
    Student.find({ _id: req.session.userid }, (err, userfound) => {
      // console.log(userfound);
      userfound[0].myapply.push(req.body.id);
      userfound[0].save();
    })
    Job.find({ _id: req.body.id }, (err, userfound) => {
      userfound[0].candidates.push(req.session.userid)
      userfound[0].save();
    })

  }

  static addStudent = (req, res) => {
    Student.exists({ email: req.body.email }, function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Result :", doc);
        if (doc) {
          res.json({ status: "ok", message: "already There" });
        } else {
          const generatePassword = (
            length = 8,
            wishlist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$"
          ) =>
            Array.from(crypto.randomFillSync(new Uint32Array(length)))
              .map((x) => wishlist[x % wishlist.length])
              .join("");
          const newPassword = generatePassword();
          const newStudent = new Student({
            email: req.body.email,
            password: newPassword,
            appliedJobs: [],
            name: "",
            cgpa: 0,
            college_id: "",
            branch: "",
            resumeLink: "",
            linkedin_profile: "",
            codechef_profile: "",
            leetcode_profile: "",
          });

          newStudent.save();

          const mailOptions = {
            from: "harshalpamecha2000@gmail.com", //'####youremail#####',
            to: req.body.email,
            subject: "Your DDU placement account!",
            text: `Your username - ${req.body.email} Your password - ${newPassword}`,
          };

          // transporter.sendMail(mailOptions, function (error, info) {
          //   if (error) {
          //     console.log(error);
          //   } else {
          //     console.log("Email sent: " + info.response);
          //   }
          // });

          res.json({
            status: "ok",
            message: "account Created",
            password: newPassword,
          });
        }
      }
    });

  }


}
/* app.post("/addStudent", (req, res) => {
  
}); */


module.exports = StudentController;