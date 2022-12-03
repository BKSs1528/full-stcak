const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")
const bookModel = require("../models/bookModel")
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.key;

router.post("/addbook", (req,res)=>{
    try{
        const mail = jwt.verify(req.headers.authorization, secretKey);
        userModel.find({mail:mail}).then((userData)=>{
            if(userData.length){
                bookModel.create({
                    title:req.body.title,
                    ISBN_number:req.body.ISBN_number,
                    author:req.body.author,
                    description:req.body.description,
                    published_date:req.body.published_date,
                    Publisher:req.body.Publisher
                })
            res.status(200).json("success");
            }else{
                res.status(400).json('Unauthorized User');
            }
        })
    }catch(err){
        res.status(400).json(err);
    }
})

module.exports = router;