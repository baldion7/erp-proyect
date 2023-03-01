const express =require("express");
const  equipmentSchema=require("../models/equipment")
const {quiet} = require("nodemon/lib/utils");
const router= express.Router();

//create user
router.post('/newusers',(req, res)=>{
const equiment=equipmentSchema(req.body);
equiment
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});



module.exports=router;