const express = require('express');
const app = express();

require('dotenv').config();
let host = process.env.HOST
let port = process.env.PORT

//use of middleware--by default public folder accessible on server with this 
app.use(express.static(__dirname+"/public"));

const path = require('path');
const templatepath = path.join(__dirname,'/templates/views')

//use template engine
app.set('view engine', 'hbs');
app.set("views",templatepath);

app.get('/',(req,res,next)=>{
    res.render("index",{
        myName: "Gangasagar Pikle",
        post:"Software Developer",

    })
});

app.get('/about',(req,res,next)=>{
    //res.send("this is about page")
    res.render("about");
});
app.get('/service',(req,res,next)=>{
    //res.send("this is service page")
    res.render("service")
});
app.get('/contact',(req,res,next)=>{
    //res.send("this is contact page")
    res.render("contact");
});
app.get('/home',(req,res,next)=>{
    //res.send("this is home page")
    res.render("home");
});

// app.listen(5555,()=>{
//     console.log("server has started"); //without dotenv
// });

app.listen(port,()=>{
    console.log(`my server started ${host}:${port}`)
});