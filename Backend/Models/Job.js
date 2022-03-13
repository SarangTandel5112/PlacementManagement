const mongoose = require("mongoose");
const {Schema}=mongoose;
const jobSchema = new Schema({
    jobTitle: String,
    jobDescription: String,
    numberOfOpening: Number,
    ctcRange: String,
    jobLocation: String,
    status: String,
    deadline:String,
    candidates: [String],
    timestatus:String,
  }) ;
  
  const Job = mongoose.model("Job", jobSchema);
  module.exports=Job;