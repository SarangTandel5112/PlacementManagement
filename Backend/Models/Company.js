const mongoose = require("mongoose");
const {Schema}=mongoose;

const companyschema = new Schema({
    name: String,
    email: String,
    number: Number,  
    ceo: String,
    hr: String,
    jobsposted:[String],
    address: String,
    password: String,
    imagepath:String
  });

  const Company = mongoose.model("Company", companyschema);
  module.exports=Company;