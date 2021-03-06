const mongoose = require("mongoose");
const {Schema}=mongoose;
const studentSchema = new Schema({
    name:String,
    email: String,
    phno:Number,
    collegename:String,
    branch:String,
    cgpa: Number,
    password: String,
    status:String,
    myapply:[{
      jobid:String,
      status:Boolean 
    }],
    resumename:String
  }) ;
  
  const Student = mongoose.model("Student", studentSchema);
 module.exports=Student;