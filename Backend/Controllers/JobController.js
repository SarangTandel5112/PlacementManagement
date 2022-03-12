const Job= require("../Models/Job");
class JobControlller{

 static requestToAddJob=(req,res)=>{
    const newJob = new Job({
        jobTitle: req.body.title[0],
        jobDescription: req.body.description[0],
        numberOfOpening: req.body.numberOfOpening[0],
        ctcRange: req.body.ctcRange[0],
        jobLocation: req.body.jobLocation[0],
        status: "waiting",
        deadline: req.body.deadline[0],
        candidates: [],
        timestatus: "active",
      });
    
      newJob.save();
    
      res.json({ status: "OK" });

 }


}
/* 
app.post("/requestToAddJob", function (req, res) {
  
});
*/
module.exports=JobControlller;
