const express = require("express");
const dotenv = require('dotenv');
dotenv.config()
const router = express.Router();
const isAuth = (req, res, next) => {
    if (req.session.userid) {
        next()
    } else {
        res.json({ msg: "You Are UnAuthorised" })
    }

}
const isStudent = (req, res, next) => {
    if (req.session.user === "Student") {
        next()
    } else {
        res.json({ msg: "You Are Not Student" })
    }

}
const isCompany = (req, res, next) => {
    if (req.session.user == "Company") {
        next()
    } else {
        res.json({ msg: "You Are Not Company" })
    }

}
const isTpo = (req, res, next) => {
    if (req.session.user == "Tpo") {
        next()
    } else {
        res.json({ msg: "You Are Not Tpo" })
    }

}

const StudentController = require("../Controllers/StundetController");
const JobControlller = require("../Controllers/JobController");
const CompanyController = require("../Controllers/CompanyController");
const TpoController = require("../Controllers/TpoController");
const LoginController = require("../Controllers/LoginController");
const Otpverify = require("../Controllers/Otpverify")


// Student Routes
router.post("/registerstudent", StudentController.register);
// router.post("/getStudentData", isAuth, StudentController.getStudentData);
// router.post("/updateStudentProfile", isAuth, StudentController.updateStudentProfile);
router.post("/studentmyapplies", isAuth, isStudent, StudentController.studentmyapplies);
router.post("/applyforcompany", isAuth, isStudent, StudentController.applyforcompany);
router.post("/checkstudentmail", StudentController.checkstdmail);
router.post("/getfulldetails", isAuth, isStudent, JobControlller.getFulldetails);
router.post("/getAvailableJobForStudent", isAuth, isStudent, JobControlller.getAvailableJobForStudent);
router.post("/settimestatus", isAuth, isStudent, JobControlller.settimestatus);
router.get("/verifystudent/:id", StudentController.emailverifystudent);

// Job Rotues

router.post("/requestToAddJob", isAuth, isCompany, JobControlller.requestToAddJob);
// router.post("/addStudentToJob", isAuth, JobControlller.addStudentToJob);
router.post("/GetAllJobsOfCompany", isAuth, isCompany, JobControlller.GetAllJobsOfCompany);
// router.post("/setdetails", isAuth, JobControlller.setdetails);
router.post("/tpoRequestedJobs", isAuth, JobControlller.tpoRequestedJobs);
router.post("/getjobdetailsforcomp", isAuth, isCompany, JobControlller.getjobdetailsforcomp);
router.post("/getappliedstudentdetails", isAuth, isCompany, JobControlller.getappliedstudent);
router.post("/setplacementstatus", isAuth, isCompany, JobControlller.setplacementstatus);

//Company Routes
// router.post("/register", CompanyController.registerCompany);
router.post("/registerCompany", CompanyController.registerCompany);
router.get("/verify/:id", CompanyController.emailverify)
router.post("/checkemail", CompanyController.checkemail)


//OtpVerify
router.post("/otpverify", Otpverify.otpverify)
router.post("/checkotp", Otpverify.checkotp)


// router.post("/companypost",isAuth, CompanyController.companyPost);


//Tpo Routes
router.get("/tpodata", LoginController.getTpoData);
router.post("/setstudentstatus", isAuth, isTpo, StudentController.setStudentStatus);
router.get("/getstudentstpo", isAuth, isTpo, LoginController.getstudentstpo);
router.get("/getcompaniestpo", isAuth, isTpo, LoginController.getcompaniestpo);
router.get("/getjobofferedtpo", isAuth, isTpo, LoginController.getjobofferedtpo);
router.post("/studentrequesttpo", isAuth, isTpo, StudentController.studentreqtpo);
router.post("/getIncomingRequest", isAuth, isTpo, JobControlller.getIncomingRequest);
router.post("/AcceptJobRequest", isAuth, isTpo, JobControlller.AcceptJobRequest);
router.post("/RejectJobRequest", isAuth, isTpo, JobControlller.RejectJobRequest);


//Login Request
router.post("/login", LoginController.loginFunction);

//Logout Request
router.get("/logout", isAuth, LoginController.logout);
router.get("/isloggedin", isAuth, LoginController.isloggedin);

module.exports = router;