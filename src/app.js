const express = require("express");
const app= express();
app.listen(3000,(req,res)=>{
    console.log("runnings");
});
app.use("/hello",(req,res)=>{
    res.send("hello1");
});