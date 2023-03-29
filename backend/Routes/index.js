const express=require("express");
const router=express.Router();
const teachersignupRouter=require("./TeacherRegister");
const checkmailrouter=require("../Routes/checkmail");
const ogranizationRouter=require("../Routes/OrganizationRegister");
const jobrouter=require("../Routes/JobPost");
router.get("/",(req,res)=>{
 res.send("This is reserved api")
})
router.use("/teachersregister",teachersignupRouter);
router.use("/checkmail",checkmailrouter);
router.use("/organizationreigster",ogranizationRouter);
router.use("/jobs",jobrouter);
 module.exports=router