const express =require("express");
const router = express.Router();

const tables = [
    {
        name:"billy",
        phone:'12',
        email:"billy@billy.com",
        id:1
    }
];
const waitlist=[
    {
        name:"bobby",
        phone:'45',
        email:"bobby@bobby.com",
        id:2
    }
];

router.get('/api/tables',(req,res)=>{
    res.json(tables);
})

router.get('/api/waitlist',(req,res)=>{
    res.json(waitlist);
})

router.post('/api/tables',(req,res)=>{
    const newRes = req.body;
    if(tables.length<5){
        tables.push(newRes)
        newRes.hasTable = true;
    } else {
        waitlist.push(newRes);
        newRes.hasTable = false;
    }
    res.json(newRes)
})

module.exports = router;
