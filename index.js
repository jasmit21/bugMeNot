// dependencies
const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const database = require('./models/dbConfig')
const userModel = require('./models/userModel')

//flash
var flash = require("connect-flash");
app.use(flash());

//session
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

//set cookie-parser
app.use(cookieParser());

//----------------session setup------------------------
// var session;
//creating 5 mins from milliseconds
const expiry = 1000 * 60 * 60;

//session middleware
app.use(
  sessions({
    secret: "BugMeNotSecretKey",
    saveUninitialized: true,
    cookie: { maxAge: expiry },
    resave: false,
  })
);
//--------------------session ended-------------------

// register view engine
app.set("view engine", "ejs");

//configuring middlewares to handle post request

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(express.json());


//routes 
app.get('/',(req,res)=>{
    // database.sequelize;
    // res.send("<h1>Hello Guys</h1>")
    // userModel
    console.log("body:",req.query)
    // userModel.create()
})
app.post('/auth',(req,res)=>{
  // database.sequelize;
  // res.send("<h1>Hello Guys</h1>")
  // userModel
  console.log("inside post req");
  


  let {name,email,mobno,pass}=req.body;
  console.log("body:",name,email,mobno,pass)
  userModel.sync({
    alter:true
  }).then(()=>{
    return  userModel.create({
      Name:name,
      Email:email,
      number:mobno,
      password:pass 
    })
  }).then((data)=>{
    console.log("data",data.toJSON());
  }).catch((err)=>{
    console.log("error",err);
  })
})


//creating server
var port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) throw err;
//   console.log(`server running http://cluedin.creast.in:${port}`);
  console.log(`server running http://localhost:${port}`);
});
