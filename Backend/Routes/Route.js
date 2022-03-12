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

module.exports=router;