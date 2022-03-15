const express=require("express");
const router =express.Router(); 


const StudentController=require("../Controllers/StundetController");
const JobControlller = require("../Controllers/JobController");
const CompanyController=require("../Controllers/CompanyController");
const TpoController=require("../Controllers/TpoController");
const LoginController=require("../Controllers/LoginController");



// Student Routes
router.post("/registerstudent",StudentController.register);
router.post("/studentrequesttpo",StudentController.studentreqtpo);
router.post("/setstudentstatus", StudentController.setStudentStatus);
router.post("/getStudentData", StudentController.getStudentData);
router.post("/updateStudentProfile", StudentController.updateStudentProfile);
router.post("/addStudent", StudentController.addStudent);


// Job Rotues
router.post("/requestToAddJob", JobControlller.requestToAddJob);
router.post("/getIncomingRequest", JobControlller.getIncomingRequest);
router.post("/settimestatus", JobControlller.settimestatus);
router.post("/getAvailableJobForStudent", JobControlller.getAvailableJobForStudent);
router.post("/AcceptJobRequest", JobControlller.AcceptJobRequest);
router.post("/RejectJobRequest", JobControlller.RejectJobRequest);
router.post("/addStudentToJob", JobControlller.addStudentToJob);
router.post("/GetAllJobsOfCompany", JobControlller.GetAllJobsOfCompany);
router.post("/setdetails", JobControlller.setdetails);
router.post("/tpoRequestedJobs", JobControlller.tpoRequestedJobs);


//Company Routes
// router.post("/register", CompanyController.registerCompany);
router.post("/registerCompany",CompanyController.registerCompany)

//Tpo Routes
router.get("/tpodata", LoginController.getTpoData);

//Login Request
router.post("/login", LoginController.loginFunction);

//Logout Request
router.post("/logout", LoginController.logout);

module.exports=router;