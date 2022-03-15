const Job= require("../Models/Job");
const Company = require("../Models/Company");
class JobControlller{

    static requestToAddJob=(req,res)=>{
      
    const newJob = new Job({
        jobTitle: req.body.title[0],
        jobDescription: req.body.description[0],
        numberOfOpening: req.body.numberOfOpening[0],
        ctcRange: req.body.ctcRange[0],
        minimumCriteria:req.body.minimumCriteria[0],
        jobLocation: req.body.jobLocation[0],
        companyWebsite:req.body.companyWebsite[0],
        status: "waiting",
        deadline: req.body.deadline[0],
        candidates: [],
        timestatus: "active",
        companyid:req.session.userid,
      });
    
      newJob.save();
      console.log(newJob._id,req.session);
      Company.find({_id:req.session.userid},(err,userfound)=>{
          console.log(userfound);
          userfound[0].jobsposted.push(newJob._id);
          console.log(userfound);
          userfound[0].save();
      })
          
      res.json({ status: "OK" });

    }
    
    static getIncomingRequest=(req,res)=>{
    Job.find({ status: "waiting" }, function (err, jobfound) {
        if (err) {
          res.json({ status: "error", error: err });
        } else {
          res.send({ alljob: jobfound });
          console.log(jobfound);
        }
      });
    }
    static settimestatus=(req,res)=>{
    Job.find({ _id: req.body.jid }, function (err, timeuser) {
        timeuser[0].timestatus = "timeout";
        timeuser[0].save();
      });
    }

    static getAvailableJobForStudent=(req,res)=>{
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
    }

    static AcceptJobRequest=(req,res)=>{
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
    }

    static RejectJobRequest=(req,res)=>{
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
    }

    static addStudentToJob=(req,res)=>{
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
    }

    static GetAllJobsOfCompany=(req,res)=>{
    Job.find({ company_id: req.body.company_id }, function (err, data) {
        if (err) {
          res.json({ status: "error", error: err });
        } else {
          res.json({ status: "ok", jobs: data });
        }
      });
    }

    static setdetails=(req,res)=>{
    let tid;
    let tname;
   tid = req.body.jid;
   tname = req.body.jname;
   console.log(tid, tname);
   Job.find({ _id: tid }, function (err, redfound) {
     console.log(redfound);
     console.log(redfound[0].status);
     redfound[0].status = tname;
     redfound[0].save();
   });
    }

    static tpoRequestedJobs=(reqr,res)=>{
        Job.find({}, function (err, data) {
            const requestedJobs = data.filter((job) => job.status === "waiting");
            console.log("requestedJobs", requestedJobs);
        
            res.send({ data: requestedJobs });
            console.log(data);
          });
    }



}
/* 


*/
module.exports=JobControlller;
