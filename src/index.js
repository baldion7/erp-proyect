const express =require('express');
const mongoose =require('mongoose');
require("dotenv").config();
const userRoutes= require("./routes/equipament")
const app= express();
const port= process.env.PORT || 9000;
//middleware
app.use(express.json())
app.use('/api',userRoutes);

//rutas
app.get('/',(req,res)=>{
    res.send("Bienvenido a mi API");
});
//mongodb conexion

mongoose
    .connect("mongodb+srv://admin:admin@erpproyect.zhii4gf.mongodb.net/equipment?retryWrites=true&w=majority")
    .then(()=>console.log("conexion exitosa"))
    .catch((error)=>console.error(error));

app.listen(port,()=>console.log('funciona el server',port))