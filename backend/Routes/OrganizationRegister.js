const express=require("express");
const router=express.Router();
const OrganziationSchema=require("../models/organizationSchema");
router.post("/",async(req,res)=>{
    await OrganziationSchema.create({
        OrganziationName:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    }).then(res.send("user registered"));
})
module.exports=router;