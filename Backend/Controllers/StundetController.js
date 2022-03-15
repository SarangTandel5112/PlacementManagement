
const Student=require("../Models/Student");
class StudentController{
    static register=(req,res)=>{
        let  s1=new Student({
            name:req.body.name[0],
            email:req.body.email[0],
            phno:req.body.phno[0],
            collegename:req.body.collegename[0],
            cgpa:req.body.cgpa[0],
            password:req.body.password[0],
            appliedJobs:[],
            status:"Pending"
            
          });
          s1.save();
          console.log(s1);
  
  
     res.send("data received")

    }

    static studentreqtpo=(req,res)=>{
        Student.find({status:"Pending"},(err,studentfound)=>{
            res.send({user:studentfound});
            console.log(studentfound);
        })
    }

    static setStudentStatus= async (req,res)=>{
      let id = req.body.val;
      let status = req.body.vid;
      console.log(req.body)
      console.log(status)
        if(status==="accept"){
            Student.findOneAndUpdate(
                {_id:id},
                {status:"Accpted"},
                (err,success)=>
                {
                    if(err){
                        res.json({status:"error"});
                    }
                    console.log(success)
                }
                // res.json()
            )
            let pendingStudents = await Student.find({ status: "Pending" });
            res.json(pendingStudents);
        }else if(status==="reject"){
            Student.findOneAndUpdate(
                {_id:id},
                {status:"Rejected"},
                (err,success)=>{
                    if(err){
                        res.json({status:"error"});
                    }
                    console.log(success)
                }
            )
            let pendingStudents = await Student.find({ status: "Pending" });
            res.json(pendingStudents);

        }
        

    }

    static getStudentData=(req,res)=>{
        Student.find({ _id: req.body.student_id }, function (err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log("getStudentData server", data);
              res.json({ status: "ok", student: data[0] });
            }
          });
    }
    
    static updateStudentProfile=(req,res)=>{
        Student.findOneAndUpdate(
            { _id: req.body.student_id },
            {
              name: req.body.name,
              cgpa: req.body.cgpa,
              college_id: req.body.college_id,
              branch: req.body.branch,
              resumeLink: req.body.resumeLink,
              linkedin_profile: req.body.linkedin_profile,
              codechef_profile: req.body.codechef_profile,
              leetcode_profile: req.body.leetcode_profile,
            },
            function (err, success) {
              if (err) {
                console.log(err);
              } else {
                console.log(success);
                res.json({ status: "ok" });
              }
            }
          );

    }

    static addStudent=(req,res)=>{
        Student.exists({ email: req.body.email }, function (err, doc) {
            if (err) {
              console.log(err);
            } else {
              console.log("Result :", doc);
              if (doc) {
                res.json({ status: "ok", message: "already There" });
              } else {
                const generatePassword = (
                  length = 8,
                  wishlist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$"
                ) =>
                  Array.from(crypto.randomFillSync(new Uint32Array(length)))
                    .map((x) => wishlist[x % wishlist.length])
                    .join("");
                const newPassword = generatePassword();
                const newStudent = new Student({
                  email: req.body.email,
                  password: newPassword,
                  appliedJobs: [],
                  name: "",
                  cgpa: 0,
                  college_id: "",
                  branch: "",
                  resumeLink: "",
                  linkedin_profile: "",
                  codechef_profile: "",
                  leetcode_profile: "",
                });
        
                newStudent.save();
        
                const mailOptions = {
                  from: "harshalpamecha2000@gmail.com", //'####youremail#####',
                  to: req.body.email,
                  subject: "Your DDU placement account!",
                  text: `Your username - ${req.body.email} Your password - ${newPassword}`,
                };
        
                // transporter.sendMail(mailOptions, function (error, info) {
                //   if (error) {
                //     console.log(error);
                //   } else {
                //     console.log("Email sent: " + info.response);
                //   }
                // });
        
                res.json({
                  status: "ok",
                  message: "account Created",
                  password: newPassword,
                });
              }
            }
          });

    }


}
/* app.post("/addStudent", (req, res) => {
  
}); */


module.exports=StudentController;