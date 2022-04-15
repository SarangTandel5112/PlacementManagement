const mongoose = require("mongoose");
const { Schema } = mongoose;
const UnverifiedstudentSchema = new Schema({
    name: String,
    email: String,
    phno: Number,
    collegename: String,
    branch: String,
    cgpa: Number,
    password: String,
    status: String,
    myapply: [{
        jobid: String,
        status: Boolean
    }],
    resumename: String
});

const Unverifiedstudent = mongoose.model("UnverifiedStudent", UnverifiedstudentSchema);
module.exports = Unverifiedstudent;