const mongoose =require('mongoose');
const equipmentSchema=mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    model:{
        type: String,
        require:true
    },
    bran:{
        type: String,
        require:true
    },
    date_delivery:{
        type: Date,
        require:true
    },
    img_directory:{
        type: String,
        require:true
    },
    next_maintenance:{
        type: Date,
        require:true
    },
    id_physical_location:{
        type: Number,
        require:true
    },
    functional_status:{
        type: Boolean,
        require:true
    },
    comment:{
        type: String,
        require:true
    }
});
module.exports=mongoose.model("Equipment", equipmentSchema)