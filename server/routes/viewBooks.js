const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bookModel = require("../models/bookModel")
const userModel = require("../models/userModel")
dotenv.config();
const secretKey = process.env.key;

router.get("/view",async(req,res)=>{
    try{
        const mail = jwt.verify(req.headers.authorization, secretKey);
        userModel.find({mail:mail}).then((userData)=>{
            if(userData.length){
                bookModel.find({mail:mail}).then((data)=>{
                    res.send(data);
                })
            }else{
                res.status(400).json("Invalid user");
            }   //
        })
    }catch(err){
        res.status(400).json(err);
    }
})

module.exports = router;