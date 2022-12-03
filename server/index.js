const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const signupController = require("./routes/reg");
const loginController = require("./routes/login");
const addBook = require("./routes/addBook");
const viewBookController = require("./routes/viewBooks");
const logoutController = require("./routes/logout");
const cors = require("cors");

const App = express();

App.use(cors());
App.use(express.json({extended:true,limit:"30mb"}))
App.use(express.json({limit:"30mb",extended:true}));
App.use(express.urlencoded({extended:false}));
dotenv.config();

// let URL = "mongodb+srv://user1:123tester@realestate.4ldww6u.mongodb.net/?retryWrites=true&w=majority"
let url ="mongodb://localhost:27017/books"

mongoose.connect(url,{useNewUrlParser: true},(err)=>{
    if(!err){
        console.log("DB Connected");
    }
    else{
        console.log(err);
    }
});

App.listen(process.env.PORT || 3003,(err)=>{
    if(!err){
        console.log("server running");
    }else{
        console.log(err);
    }
});



// App.get("/",(req,res)=>{
//     res.send("Home Page")
// });

App.use("/register",signupController);
App.use("/login",loginController);
App.use("/addBook",addBook);
App.use("/viewbooks",viewBookController);
App.use("/logout",logoutController);