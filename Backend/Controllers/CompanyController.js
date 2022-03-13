const Company = require("../Models/Company");
class CompanyController{
    static registerCompany=(req,res)=>{
        console.log(req.body);

        let tempuser = req.body.email[0];
      
        const user = new Company({
          name: req.body.name[0],
          email: req.body.email[0],
          number: req.body.phno[0],
          ceo: req.body.ceo[0],
          hr: req.body.hr[0],
          address: req.body.address[0],
          password: req.body.password[0],
          job: [],
        });
        console.log(user);
        user.save();
        res.json({
          msg: "Data received",
        });
    }
    
}


module.exports=CompanyController;