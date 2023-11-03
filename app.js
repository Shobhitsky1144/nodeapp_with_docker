const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("h")
})
app.listen(5500,()=>{
    console.log("app is runningg")
})