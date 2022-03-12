const Company = require("../Models/Company");
const Student=require("../Models/Student");
const Tpo=require("../Models/Tpo");
class LoginController{
    
    static loginFunction=(req,res)=>{
        let logindatauser = [];
  let logindataadmin = [];
  let name = req.body.email[0];
  let lpassword = req.body.password[0];
  let type = req.body.type[0];
  let a = "";
  console.log(req.body);
  if (type === "student") {
    Student.find({ email: name }, function (err, userfounds) {
      if (userfounds.length === 0 || err) {
        res.send({ err: "incorrect username!!", user: userfounds[0] });
        console.log("incorrect username!!");
      } else if (userfounds[0].password === lpassword) {
        res.send({ err: req.body.type[0], user: userfounds[0] });
        logindatauser = userfounds;
        console.log(logindatauser);
      } else {
        res.send({ err: "incorrect password!!", user: userfounds[0] });
        console.log("incorrect password!!");
      }
    });
  }

  if (type === "company") {
    Company.find({ email: name }, function (err, userfounds) {
      if (userfounds.length === 0 || err) {
        res.send({ err: "incorrect username!!", user: userfounds });
        console.log("incorrect username!!");
      } else if (userfounds[0].password === lpassword) {
        res.send({ err: req.body.type[0], user: userfounds });
        logindataadmin = userfounds;
      } else {
        res.send({ err: "incorrect password!!", user: userfounds });
        console.log("incorrect password!!");
      }
    });
  }

  if (type === "tpo") {
    Tpo.find({ email: name }, function (err, userfounds) {
      console.log("tpofound");
      if (userfounds.length === 0 || err) {
        res.send({ err: "incorrect username!!", user: userfounds });
        console.log("incorrect username!!");
      } else if (userfounds[0].password === lpassword) {
        res.send({ err: req.body.type[0], user: userfounds });
        logindataadmin = userfounds;
      } else {
        res.send({ err: "incorrect password!!", user: userfounds });
        console.log("incorrect password!!");
      }
    });
  }

    }
    static getTpoData = async(req,res)=>{
     
      let slen = await Student.find({ status: "accept" });
      slen = slen.length;
      let clen = await Company.find();
      clen = clen.length;
      res.json({
        slen: slen,
        clen: clen,
      });
  }
}
module.exports=LoginController;
/*
app.post("/login", function (req, res) {
  
}); */