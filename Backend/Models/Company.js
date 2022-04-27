const mongoose = require("mongoose");
const {Schema}=mongoose;
const jwt=require("jsonwebtoken")

const companyschema = new Schema({
    name: String,
    email: String,
    number: Number,  
    ceo: String,
    hr: String,
    jobsposted:[String],
    address: String,
    password: String,
    imagepath:String,
    tokens:[{
      token:{
        type:String,
        required:true
      }
    }]
  });
  
  companyschema.methods.generatetoken=async function(){
    try {
      const token=jwt.sign({_id:this._id},"mynameissarangtandel")   
      this.tokens.push({token:token})
      return token;
    } catch (error) {
      console.log("error in token");     
    }    
  }
  const Company = mongoose.model("Company", companyschema);
  module.exports=Company;