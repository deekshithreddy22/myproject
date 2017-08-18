var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();



var route = require('./routes1/routes');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database');
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(err);
        
    }
});


//defining port
const port = 3000;

//adding middleware

app.use(cors());
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));


//routes
app.use('/apis',route);

const server=app.listen(port,()=>
{
    console.log('server running at'+port);
});
module.exports=server;

