const Company = require("../Models/Company");
const path=require('path');
const Job = require("../Models/Job");
class CompanyController{
    
    static registerCompany=(req,res)=>{
      if(req.files===null){
        res.status(400).json({msg:'No file Uploaded'})
      }else{
        const file=req.files.file;
        const fileName=Date.now()+file.name;
        console.log(req.body)
       
        const user = new Company({
          name: req.body.name,
          email: req.body.email,
          number: req.body.phno,
          ceo: req.body.ceo,
          hr: req.body.hr,
          address: req.body.address,
          password: req.body.password,
          jobsposted: [],
          imagepath:fileName
        });
        user.save();
        res.json({
          msg: "Data received",
        });


        
        file.mv(path.join(__dirname,`/../../public/Photos/Files/clogo/${fileName}`))

      }
    }



    
   
    
}


module.exports=CompanyController;