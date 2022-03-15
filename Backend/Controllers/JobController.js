const Job= require("../Models/Job");
const Company = require("../Models/Company");
const path=require('path')
class JobControlller{

    static requestToAddJob=(req,res)=>{
      if(req.files===null){
        fileName=null;
      }else{
        const file=req.files.file;
        const fileName=Date.now()+file.name;
        file.mv(path.join(__dirname,`/../../public/Photos/Files/jobdescription/${fileName}`))

      Company.find({_id:req.session.userid},(err,userfound)=>{
        console.log(userfound[0].name,"obj")
        const newJob = new Job({
          jobTitle: req.body.title,
          jobDescription: req.body.description,
          numberOfOpening: req.body.numberOfOpening,
          ctcRange: req.body.ctcRange,
          minimumCriteria:req.body.minimumCriteria,
          jobLocation: req.body.jobLocation,
          companyWebsite:req.body.companyWebsite,
          status: "waiting",
          deadline: req.body.deadline,
          candidates: [],
          timestatus: "active",
          companyid:req.session.userid,
          compname:userfound[0].name,
          compimg:userfound[0].imagepath,
          jobDescriptionFile:fileName
        });
        newJob.save();
        userfound[0].jobsposted.push(newJob._id);
        // console.log(userfound);
      console.log(newJob)
        userfound[0].save();
      })
      
    
    
      res.json({ status: "OK" });

      
      
          

    }
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
