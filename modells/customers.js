const mongoose = require('mongoose');


const CustomerSchema = mongoose.Schema({
    Customer_name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Date_birth:{
        type:String,
        required:false
    },
    Company_info:{
        type:String,
        required:true
    },
     Adress_info:{
        type:String,
        required:true
    },
   
});

const Customer = module.exports = mongoose.model('Customer',CustomerSchema);