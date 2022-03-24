const Job = require("../Models/Job");
const Company = require("../Models/Company");
const path = require('path');
const Student = require("../Models/Student");
class JobControlller {

  static requestToAddJob = (req, res) => {
    let fileName;
    if (req.files === null) {
      fileName = null;
    } else {
      const file = req.files.file;
      fileName = Date.now() + file.name;
      file.mv(path.join(__dirname, `/../../public/Photos/Files/jobdescription/${fileName}`))

      Company.find({ _id: req.session.userid }, (err, userfound) => {
        const newJob = new Job({
          jobTitle: req.body.title,
          jobDescription: req.body.description,
          numberOfOpening: req.body.numberOfOpening,
          ctcRange: req.body.ctcRange,
          minimumCriteria: req.body.minimumCriteria,
          jobLocation: req.body.jobLocation,
          companyWebsite: req.body.companyWebsite,
          status: "waiting",
          deadline: req.body.deadline,
          candidates: [],
          timestatus: "active",
          companyid: req.session.userid,
          compname: userfound[0].name,
          compimg: userfound[0].imagepath,
          jobDescriptionFile: fileName
        });
        newJob.save();
        userfound[0].jobsposted.push(newJob._id);
        userfound[0].save();
      })

      res.json({ status: 'OK' })








    }
  }
  static getIncomingRequest = (req, res) => {
    Job.find({ status: "waiting" }, function (err, jobfound) {
      if (err) {
        res.json({ status: "error", error: err });
      } else {
        res.send({ alljob: jobfound });
      }
    });
  }
  static settimestatus = (req, res) => {
    Job.find({ _id: req.body.jid }, function (err, timeuser) {
      timeuser[0].timestatus = "timeout";
      timeuser[0].save();
    });
  }

  static getAvailableJobForStudent = async (req, res) => {

    Job.find(
      { status: "accepted", timestatus: "active" },
      function (err, jobfound) {
        if (err) {
          res.json({ status: "error" });
        } else {
          Student.find({ _id: req.session.userid }, (err, userfound) => {
            res.send({ alljob: jobfound, oneuser: userfound[0].myapply });

          })


        }
      }
    );
  }

  static AcceptJobRequest = (req, res) => {
    Job.findOneAndUpdate(
      { _id: req.body.job_id },
      { status: "accepted" },
      function (err, success) {
        if (err) {
          res.json({ status: "error", error: err });
        } else {
          res.json({ status: "OK" });
        }
      }
    );
  }

  static RejectJobRequest = (req, res) => {
    Job.findOneAndUpdate(
      { _id: req.body.job_id },
      { status: "rejected" },
      function (err, success) {
        if (err) {
          res.json({ status: "error", error: err });
        } else {
          res.json({ status: "OK" });
        }
      }
    );
  }

  static addStudentToJob = (req, res) => {
    Job.findOneAndUpdate(
      { _id: req.body.job_id },
      { $push: { candidates: req.body.student_email } },
      function (err, success) {
        if (err) {
          console.log(err);
        } else {
          res.json({ status: "ok" });
        }
      }
    );
  }

  static GetAllJobsOfCompany = (req, res) => {
    Job.find({ companyid: req.session.userid }, function (err, data) {
      if (err) {
        res.json({ status: "error", error: err });
      } else {
        res.json({ status: "ok", jobs: data });
      }
    });
  }

  static setdetails = (req, res) => {
    let tid;
    let tname;
    tid = req.body.jid;
    tname = req.body.jname;
    Job.find({ _id: tid }, function (err, redfound) {
      redfound[0].status = tname;
      redfound[0].save();
    });
  }

  static tpoRequestedJobs = (req, res) => {
    Job.find({}, function (err, data) {
      const requestedJobs = data.filter((job) => job.status === "waiting");

      res.send({ data: requestedJobs });
    });
  }


  static getFulldetails = (req, res) => {
    Job.find({ _id: req.body.id }, (err, userfound) => {
      try {
        Student.find({ _id: req.session.userid }, (err, stdfound) => {
          let data=(stdfound[0].myapply).map(a=>a.jobid)
          res.send({ "oneuser": userfound[0], "userdetails": data })

        })
      } catch (err) {
        console.log("Some Error Occured")
      }
    })
  }

  static getjobdetailsforcomp = (req, res) => {
    Job.find({ _id: req.body.id }, (err, jobfound) => {
      res.send({ onedata: jobfound[0] })

    })
  }


  static getappliedstudent = async (req, res) => {
    const senddata = [];
    const jobfound = await Job.find({ _id: req.body.id })
    for (let i = 0; i < jobfound[0].candidates.length; i++) {
      const std = await Student.find({ _id: jobfound[0].candidates[i].studentid })
      senddata.push(std[0])
    }
    res.send({ stddata: senddata ,})
  }



}
/* 


*/
module.exports = JobControlller;
