const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const jobSchema=new mongoose.Schema({
    title:String,
    content:String,
    RequiredQualification:String,
    location:String,
    contactEmail:String,
    registeredEmail:String,
    Organziation:{
        type: Schema.Types.ObjectId,
        ref:"OrganziationSchema"
    }
})
module.exports=mongoose.model("JobPost",jobSchema);