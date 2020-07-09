const express =require("express");
const path = require("path")
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../index.html"));
})

router.get('/tables',(req,res)=>{
    res.sendFile(path.join(__dirname,"../tables.html"));
})

router.get('/reserve',(req,res)=>{
    res.sendFile(path.join(__dirname,"../reservation.html"));
})

module.exports = router;