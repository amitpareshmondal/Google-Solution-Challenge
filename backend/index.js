const express=require("express");
const cors=require("cors");
const app=express();
const db=require("./db");
app.use(cors({
    origin:'*'
}))
db.connect();
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(8000,()=>{
    console.log("connected on port 8000");
})