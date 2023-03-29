const express=require("express");
const mongoose=require("mongoose");
const TeacherSchema=require("../models/TeacherSchema");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("This is from Teacher registration");
})
router.post("/",async(req,res)=>{
    try{
        await TeacherSchema.create(
            {
                Name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                qualification:req.body.qualification,
                DOB:req.body.dob,
                location:req.body.location
            }
        ).then(
            res.send("User registered")
        )
    }
    catch{

    }
    
})
module.exports=router;