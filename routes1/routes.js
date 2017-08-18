const express = require('express');
const router = express.Router();

const Customer = require('../modells/customers');
const Employee = require('../modells/employees');

      

//********************************************Customer RELATED************************************************


//customer info

router.get('/customerinfo',(req,res,next)=>{
    Customer.find(function(err,customer){
        res.json(customer);
    })
})

//add customerinfo

router.post('/addcustomerinfo',(req,res,next)=>{
    let newCustomer = new Customer({
        Customer_name : req.body.Customer_name,
        Age : req.body.Age,
        Gender : req.body.Gender,
        Date_birth : req.body.Date_birth,
        Company_info : req.body.Company_info,
        Adress_info : req.body.Adress_info,
        
    });
    newCustomer.save((err)=>{
        if(err){
                res.json({msg:'Failed to add customer'});
               }
        else{
                res.json({msg:'customer added successfully'});
            }
    });
});


//delete customerinfo
router.delete('/deletecustomerinfo/:id',(req,res,next)=>{
   Customer.remove({_id:req.params.id},function(err,successful){
       if(err){
           res.json(err);
       }
        else{
            res.json(successful);
        }
   });
});

// update customerinfo
router.put('/updatecustomerinfo/:id',(req,res,next)=>{
   Customer.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
       Customer.findOne({_id:req.params.id}).then(function(customer){
           res.json(customer);
       })
   })
})





//****************************************Employee related***********************************************

//employee info  

router.get('/employeeinfo',(req,res,next)=>{
    Employee.find(function(err,employee){
        res.json(employee);
    })
})

//add employeeinfo

 router.post('/addemployeeinfo',(req,res,next)=>{
    let newEmployee = new Employee({
        Employee_name : req.body.Employee_name,
        Age : req.body.Age,
        Gender : req.body.Gender,
        Date_birth : req.body.Date_birth,
        Experience_info : req.body.Experience_info,
        Adress_info : req.body.Adress_info,
        Project_info: req.body.Project_info,
    });
    newEmployee.save((err,details)=>{
        if(err){
                res.json({msg:'Failed to add employee'});
               }
        else{
                res.json({msg:'employee added successfully'});
            }
    })
});


///delete employeeinfo 

  router.delete('/deleteemployeeinfo/:id',(req,res,next)=>{
   Employee.remove({_id:req.params.id},function(err,result){
       if(err){
           res.json(err);
       }
        else{
            res.json(result);
        }
   });
});

 
  
///update employeeinfo 

      router.put('/updateemployeeinfo/:id',(req,res,next)=>{
      Employee.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
       Employee.findOne({_id:req.params.id}).then(function(employee){
           res.json(employee);
       })
   })
})












module.exports = router;