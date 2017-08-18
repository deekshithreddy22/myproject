const mongoose = require('mongoose');


const EmployeeSchema = mongoose.Schema({
    Employee_name:{
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
    Experience_info:{
        type:Number,
        required:true
    },
     Adress_info:{
        type:String,
        required:true
    },
     Project_info:{
        type:String,
        required:true
    },

});

const Employee = module.exports = mongoose.model('Employee',EmployeeSchema);