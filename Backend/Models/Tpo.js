const mongoose = require("mongoose");
const {Schema}=mongoose;
const tpoSchema = new Schema({
    email: String,
    password: String,
  }) ;
const  Tpo=mongoose.model("Tpo",tpoSchema);
  module.exports=Tpo;