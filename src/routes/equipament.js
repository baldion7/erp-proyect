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
//lsit user
router.get('/listuser',(req,res)=>{
    equipmentSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});
//listar usuario por a id
router.get('/listuser/:id',(req,res)=>{
    const {id}=req.params;
    equipmentSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});
//update users
router.put('/listuser/update/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    equipmentSchema
        .updateOne({_id:id},{$set:{name}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

router.delete('/listuser/delete/:id',(req,res)=>{
    const {id}=req.params;
    equipmentSchema
        .remove(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});


module.exports=router;