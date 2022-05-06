const mongoose = require("mongoose");
const {Schema}=mongoose;

const OtpSchema=new Schema({
    number:Number,
    otp:Number
});
const Otp=mongoose.model("otp",OtpSchema);
module.exports=Otp;