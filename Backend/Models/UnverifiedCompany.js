const mongoose = require("mongoose");
const {Schema}=mongoose;

const unverifiedcompanyschema = new Schema({
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

const Unverifiedcompany = mongoose.model("UnverifiedCompany", unverifiedcompanyschema);
module.exports=Unverifiedcompany;