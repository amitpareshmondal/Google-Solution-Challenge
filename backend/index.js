const express=require("express");
const cors=require("cors");
const app=express();
const db=require("./db");
const router=require("./Routes/index");
app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
db.connect();
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.use("/api",router);
app.listen(8000,()=>{
    console.log("connected on port 8000");
})