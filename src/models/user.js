const mongoose =require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    type_dumen:{
       type:String,
       require:true
    },
    document:{
        type:Number,
        require:true
    },
    date_inser:{
        type:Date,
        require:true
    },

})