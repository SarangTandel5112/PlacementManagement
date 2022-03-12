const express=require("express");
const router =express.router(); 
const StudentController=require("../Controllers/StundetController");
const JobControlller = require("../Controllers/JobController");


// Student Routes
router.post("/registerstudent",StudentController.register());
router.post("/studentrequesttpo",StudentController.studentreqtpo());
router.post("/setstudentstatus", StudentController.setStudentStatus());
router.post("/getStudentData", StudentController.getStudentData());
router.post("/updateStudentProfile", StudentController.updateStudentProfile());
router.post("/addStudent", StudentController.addStudent());


// Job Rotues
router.post("/requestToAddJob", JobControlller.requestToAddJob());
router.post("/getIncomingRequest", JobControlller.getIncomingRequest());
router.post("/settimestatus", JobControlller.settimestatus());
router.post("/getAvailableJobForStudent", JobControlller.getAvailableJobForStudent());
router.post("/AcceptJobRequest", JobControlller.AcceptJobRequest());
router.post("/RejectJobRequest", JobControlller.RejectJobRequest());
router.post("/addStudentToJob", JobControlller.addStudentToJob());
router.post("/GetAllJobsOfCompany", JobControlller.GetAllJobsOfCompany());
router.post("/setdetails", JobControlller.setdetails());
router.post("/tpoRequestedJobs", JobControlller.tpoRequestedJobs());

module.exports=router;