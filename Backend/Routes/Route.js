const express=require("express");
const router =express.Router(); 
const isAuth = (req,res,next)=>{
    if(req.session.userid){
        next()
    }else{
        res.json({msg:"You Are UnAuthorised"})
    }

}


const StudentController=require("../Controllers/StundetController");
const JobControlller = require("../Controllers/JobController");
const CompanyController=require("../Controllers/CompanyController");
const TpoController=require("../Controllers/TpoController");
const LoginController=require("../Controllers/LoginController");



// Student Routes
router.post("/registerstudent",StudentController.register);
router.post("/studentrequesttpo",isAuth,StudentController.studentreqtpo);
router.post("/setstudentstatus",isAuth, StudentController.setStudentStatus);
router.post("/getStudentData",isAuth, StudentController.getStudentData);
router.post("/updateStudentProfile", isAuth,StudentController.updateStudentProfile);
router.post("/addStudent", StudentController.addStudent);
router.post("/studentmyapplies",isAuth, StudentController.studentmyapplies);
router.post("/applyforcompany",isAuth, StudentController.applyforcompany);



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
router.post("/getfulldetails", JobControlller.getFulldetails);
router.post("/getjobdetailsforcomp", JobControlller.getjobdetailsforcomp);
router.post("/getappliedstudentdetails",JobControlller.getappliedstudent);







//Company Routes
// router.post("/register", CompanyController.registerCompany);
router.post("/registerCompany",CompanyController.registerCompany);



router.post("/companypost",isAuth, CompanyController.companyPost);




//Tpo Routes
router.get("/tpodata", LoginController.getTpoData);

//Login Request
router.post("/login",  LoginController.loginFunction);

//Logout Request
router.get("/logout", isAuth, LoginController.logout);
router.get("/isloggedin", isAuth, LoginController.isloggedin);

module.exports=router;