const express=require("express");
const path=require("path");
const app=express();

var {createProxyMiddleware } = require("http-proxy-middleware");
var proxyPath = "http://127.0.0.1:3000";

var proxyOption ={target:proxyPath,changeOrigoin:true};


app.use(express.static(__dirname));

app.get("/",(reg,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/form",(reg,res)=>{
    res.sendFile(path.join(__dirname,"form.html"));
})
app.use("/api",createProxyMiddleware(proxyOption))

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})