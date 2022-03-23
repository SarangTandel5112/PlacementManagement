const Company = require("../Models/Company");
const Student = require("../Models/Student");
const Tpo = require("../Models/Tpo");
class LoginController {

  static loginFunction = (req, res) => {
    let logindatauser = [];
    let logindataadmin = [];
    let name = req.body.email[0];
    let lpassword = req.body.password[0];
    let type = req.body.type[0];
    let a = "";
    if (type === "student") {
      Student.find({ email: name }, function (err, userfounds) {
        if (userfounds.length === 0 || err) {
          res.send({ err: "incorrect username!!", user: userfounds[0] });
        } else if (userfounds[0].password === lpassword) {
          req.session.user = "Student";
          req.session.userid = userfounds[0]._id;
          res.send({ err: req.body.type[0], user: userfounds[0] });

          logindatauser = userfounds;

        } else {
          res.send({ err: "incorrect password!!", user: userfounds[0] });
        }
      });
    }

    if (type === "company") {
      Company.find({ email: name }, function (err, userfounds) {
        if (userfounds.length === 0 || err) {
          res.send({ err: "incorrect username!!", user: userfounds });
        } else if (userfounds[0].password === lpassword) {
          req.session.user = "Company";
          req.session.userid = userfounds[0]._id;
          res.send({ err: req.body.type[0], user: userfounds });
          logindataadmin = userfounds;
        } else {
          res.send({ err: "incorrect password!!", user: userfounds });
        }
      });
    }

    if (type === "tpo") {
      Tpo.find({ email: name }, function (err, userfounds) {
        if (userfounds.length === 0 || err) {
          res.send({ err: "incorrect username!!", user: userfounds });
        } else if (userfounds[0].password === lpassword) {
          req.session.user = "Tpo"
          req.session.userid = userfounds[0]._id;
          res.send({ err: req.body.type[0], user: userfounds });
          logindataadmin = userfounds;
        } else {
          res.send({ err: "incorrect password!!", user: userfounds });
        }
      });
    }

  }
  static getTpoData = async (req, res) => {



    let slen = await Student.find({ status: "Accpted" });
    slen = slen.length;

    let clen = await Company.find();
    clen = clen.length;
    res.json({
      slen: slen,
      clen: clen,
    });
  }

  static logout = async (req, res) => {
    req.session.destroy(err => {
      if (err) {
          return res.send({ error: 'Logout error' })
      }
      req.session = null
      res.clearCookie("DDUPLACEMENT", {path: '/'})
      return res.send({ 'clearSession': 'success' })
  })
  }
  static isloggedin=(req,res)=>{
    if(req.session.userid){
      res.json({loggedin:true,user:req.session.user})
    }else{
      res.json({loggedin:false})
    }
  }
}

module.exports = LoginController;
/*
app.post("/login", function (req, res) {
  
}); */