const mongoose = require("mongoose");
const {Schema}=mongoose;
const tpoSchema = new Schema({
    email: String,
    password: String,
  }) ;
  Tpo=mongoose.model("Tpo",tpoSchema);
  module.exports=Tpo;