const Job = require("../Models/Job");
const path = require('path');
const Student = require("../Models/Student");
class StudentController {
  static register = (req, res) => {
    try {
      if (req.files === null) {
        res.status(400).json({ msg: 'No file Uploaded' })
      } else {
        const file = req.files.file;
        const fileName = Date.now() + file.name;
  
  
        const user = new Student({
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
        user.save();
        res.json({
          msg: "Data received",
        });
  
  
  
        file.mv(path.join(__dirname, `/../../../front-end/build/public/Photos/Files/sresume/${fileName}`))
  
  
  
  
  
      }
      
    } catch (error) {
      res.send("Some Internal Error Ocuured")
    }
    




  }

  static studentreqtpo = (req, res) => {
    try {
      Student.find({ status: "Pending" }, (err, studentfound) => {
        res.send({ user: studentfound });
  
      })
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    
  }

  static setStudentStatus = async (req, res) => {
    try {
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
      
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    


  }

  static getStudentData = (req, res) => {
    try{
      Student.find({ _id: req.body.student_id }, function (err, data) {
        if (err) {
  
        } else {
  
          res.json({ status: "ok", student: data[0] });
        }
      });
    }
    catch(e){
      res.send("Some Internal Error Occured")
    }
    
  }

  static updateStudentProfile = (req, res) => {
    try {
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
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
   

  }


  static studentmyapplies = async (req, res) => {
    try {
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
    } catch (error) {
      res.send("Some Error Occured")
    }
    

  }



  static applyforcompany = (req, res) => {
    try {
      Student.find({ _id: req.session.userid }, (err, userfound) => {
        const obj = {
          jobid: req.body.id,
          status: false
        }
        userfound[0].myapply.push(obj);
        userfound[0].save();
      })
      Job.find({ _id: req.body.id }, (err, userfound) => {
        const obj1={
          studentid:req.session.userid,
          status:false,
        }
        userfound[0].candidates.push(obj1)
        userfound[0].save();
      })
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
   

  }

  static addStudent = (req, res) => {
    try {
      Student.exists({ email: req.body.email }, function (err, doc) {
        if (err) {
          console.log(err);
        } else {
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
            //   } else {
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
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    

  }


}



module.exports = StudentController;