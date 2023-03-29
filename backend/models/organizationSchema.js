const mongoose=require("mongoose");
const organizationSchema=new mongoose.Schema({
    OrganziationName: String,
    email:String,
    phone:String,
    address:String
})
module.exports=mongoose.model("OrganziationSchema",organizationSchema);