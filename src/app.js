const express = require("express");
const app= express();
const {adminAuth}=require("./middlewares/auth")
app.listen(3000,(req,res)=>{
    console.log("runnings");
});
app.use("/hello",(req,res)=>{
    res.send("hello1");
});
app.get("/getData",(req,res)=>{
    res.send("get data");
});
app.post("/addData",(req,res)=>{
    res.send("add data");
});

// adding middleware for all kinds of requests
app.use("/admin",adminAuth);

app.get("/admin/getData",(req,res)=>{
    res.send("got data");
})