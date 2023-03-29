const mongoose=require("mongoose");
const TeacherSchema = new mongoose.Schema({
    Name: String,
    email: String,
    phone:String,
    password: String,
    qualification:String,
    DOB:Date,
    location:String
  });
  
  module.exports = mongoose.model("Teacher", TeacherSchema);
  