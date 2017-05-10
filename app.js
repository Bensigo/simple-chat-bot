const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    request = require('request');


//creating the port 
const port = process.env.port ||4000

//instancecating app
const app = express();

//setting up middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//server index page 
app.get('/', (req,res)=>{
    res.send(`<h4> app Deployed!</h4>`);
})


//webhook route
//facebook verifycation
app.get('/webhook',(req,res)=>{
    if(req.query['hub.verify_token'] === 'my_token'){
        console.log('verified webhook')
        res.status(200).send(req.query['hub.challenge']);
    }else{
        console.log('verification failed , token does not match ');
        res.sendStatus(403);
    }
} )




//starting the server 
app.listen(port , ()=>{
    console.log(`😀 😀 🌍 starting server on http://localhost:${port}`);
})