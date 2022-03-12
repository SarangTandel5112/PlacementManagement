const express=require("express");
const router =express.router(); 
const StudentController=require("../Controllers/StundetController");

router.post("/registerstudent",StudentController.register());
router.post("/studentrequesttpo",StudentController.studentreqtpo());
router.post("/setstudentstatus", StudentController.setStudentStatus());
router.post("/getStudentData", StudentController.getStudentData());
router.post("/updateStudentProfile", StudentController.updateStudentProfile());
router.post("/addStudent", StudentController.addStudent());

module.exports=router;