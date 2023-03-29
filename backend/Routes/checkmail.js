const express=require("express");
const router=express.Router();
const mailSchema=require("../models/mails");
router.post("/",async(req,res)=>{
    var email=await req.body.email;
    const docs=await mailSchema.findOne({'email':email});
    if(docs){
        res.send("email exists");
    }
    else{
        res.send("mail does not exists")
        await mailSchema.create({
            email:email
        })
    }
})
module.exports=router;