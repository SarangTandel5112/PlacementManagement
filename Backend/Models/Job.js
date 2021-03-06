const mongoose = require("mongoose");
const {Schema}=mongoose;
const jobSchema = new Schema({

  jobTitle: String,
  jobDescription: String,
  numberOfOpening: Number,
  ctcRange: String,
  minimumCriteria : Number,
  branch : String,
  jobLocation: String,
  companyWebsite: String,
  status: String,
  deadline:String,
  candidates: [{
    studentid:String,
    status:Boolean,
  }],
  timestatus:String,
  companyid:String,
  compname:String,
  compimg:String,
  jobDescriptionFile:String

  }) ;
  
  const Job = mongoose.model("Job", jobSchema);
  module.exports=Job;