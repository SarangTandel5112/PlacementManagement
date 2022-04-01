const Job = require("../Models/Job");
const Company = require("../Models/Company");
const path = require('path');
const Student = require("../Models/Student");
const { resolveSoa } = require("dns");
class JobControlller {

  static requestToAddJob = (req, res) => {
    try{
      let fileName;
    if (req.files === null) {
      fileName = null;
    } else {
      const file = req.files.file;
      fileName = Date.now() + file.name;
      file.mv(path.join(__dirname, `/../../../front-end/build/Photos/Files/jobdescription/${fileName}`))

      Company.find({ _id: req.session.userid }, (err, userfound) => {
        const newJob = new Job({
          jobTitle: req.body.title,
          jobDescription: req.body.description,
          numberOfOpening: req.body.numberOfOpening,
          ctcRange: req.body.ctcRange,
          minimumCriteria: req.body.minimumCriteria,
          jobLocation: req.body.jobLocation,
          numberOfOpening: req.body.numberOfOpening,
          branch: req.body.branch,
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
    catch(e){
      res.send("Internal Server Error Occured")
    }
    
  }
  static getIncomingRequest = (req, res) => {
    try{
      Job.find({ status: "waiting" }, function (err, jobfound) {
        if (err) {
          res.json({ status: "error", error: err });
        } else {
          res.send({ alljob: jobfound });
        }
      });
    }
    catch(e){
      res.send("Some Internal Error Occured")
    }
    
  }
  static settimestatus = (req, res) => {
    try{
      Job.find({ _id: req.body.jid }, function (err, timeuser) {
        timeuser[0].timestatus = "timeout";
        timeuser[0].save();
      });
    }
    catch(e){
      res.send("Some Internal Error Occured")
    }
    
  }

  static getAvailableJobForStudent = async (req, res) => {
    try{
      let student=await Student.findById(req.session.userid);
    let stubranch=student.branch;
    let stucgpa=student.cgpa;
    
    

    Job.find(
      { status: "accepted", timestatus: "active",branch: stubranch},
      function (err, jobfound) {
        if (err) {
          res.json({ status: "error" });
        } else {
          Student.find({ _id: req.session.userid }, (err, userfound) => {
            console.log(jobfound)
            console.log(jobfound)
            jobfound=jobfound.filter((job)=>{return stucgpa>job.minimumCriteria})
            res.send({ alljob: jobfound, oneuser: userfound[0].myapply });

          })


        }
      }
    );
    }
    catch(e){
      res.send("Some Internal Error Occured")
    }
    
  }

  static AcceptJobRequest = (req, res) => {
    try{
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
    catch(e){
      res.send("Some Internal Error Occured")
    }
   
  }

  static RejectJobRequest = (req, res) => {
    try {
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
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    
  }

  static addStudentToJob = (req, res) => {
    try {
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
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    
  }

  static GetAllJobsOfCompany = (req, res) => {
    try {
      Job.find({ companyid: req.session.userid }, function (err, data) {
        if (err) {
          res.json({ status: "error", error: err });
        } else {
          res.json({ status: "ok", jobs: data });
        }
      });
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    
  }

  static setdetails = (req, res) => {
    try{
      let tid;
    let tname;
    tid = req.body.jid;
    tname = req.body.jname;
    Job.find({ _id: tid }, function (err, redfound) {
      redfound[0].status = tname;
      redfound[0].save();
    });
    }
    catch(e){
      res.send("Some Error Occured")
    }
    
  }

  static tpoRequestedJobs = (req, res) => {
    try {
      Job.find({}, function (err, data) {
        const requestedJobs = data.filter((job) => job.status === "waiting");
  
        res.send({ data: requestedJobs });
      });
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    
  }


  static getFulldetails = (req, res) => {
    try {
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
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
   
  }

  static getjobdetailsforcomp = (req, res) => {
    try {
      Job.find({ _id: req.body.id }, (err, jobfound) => {
        res.send({ onedata: jobfound[0] })
  
      })
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    
  }


  static getappliedstudent = async (req, res) => {
    try {
      const senddata = [];
    const jobfound = await Job.find({ _id: req.body.id })
    
    for (let i = 0; i < jobfound[0].candidates.length; i++) {
      // console.log(jobfound[0].candidates)
      const std = await Student.find({ _id: jobfound[0].candidates[i].studentid })
      console.log(jobfound[0].candidates[i])
      let object={
        stddetails:std[0],
        placementstatus:jobfound[0].candidates[i].status

      }
      senddata.push(object)
    }
    res.send({ stddata: senddata ,})
      
    } catch (error) {
      res.send("Some Internal Error Occured")
    }
    
  }

  static setplacementstatus=async(req,res)=>{
    try {
      
    } catch (error) {
      res.send("Some Internal Error  Occured")
    }
       
       let jobfound= await Job.findById(req.body.jobid);
       console.log(jobfound.candidates)
       for(let i=0;i<jobfound.candidates.length;i++){
         if(jobfound.candidates[i].studentid===req.body.studentid){
           jobfound.candidates[i].status=true;
         }
       }
       jobfound.save();
       let stdfound=await Student.findById(req.body.studentid);
       for(let i=0;i<stdfound.myapply.length;i++){
         if(stdfound.myapply[i].jobid===req.body.jobid){
          stdfound.myapply[i].status=true;
         }
       }
       stdfound.save()
       
       
       res.json({msg:true})

  }



}

module.exports = JobControlller;
