const express=require("express");
const router=express.Router();
const orgschema=require("../models/organizationSchema");
const jobSchema=require("../models/jobpost");
router.post("/",async(req,res)=>{
    const org=await orgschema.findOne({email:req.body.registeredEmail});
    if(org){
        await jobSchema.create({
            title:req.body.title,
            content:req.body.content,
            RequiredQualification:req.body.qualification,
            location:req.body.location,
            contactEmail:req.body.contactEmail,
            registeredEmail:req.body.registeredEmail,
            Organziation:org._id
        }).then(res.send("Job Post created created") )
    }
})
router.get("/",async(req,res)=>{
    await jobSchema.find({location:req.body.location,RequiredQualification:req.body.qualification})
    .exec()
    .then((jobs)=>{
        if(jobs){
            console.log(jobs);
            res.send(jobs)
        }
        else{
            console.log("no jobs found");
            res.send("no jobs found");
        }
    }
       
    )
    
})
module.exports=router;