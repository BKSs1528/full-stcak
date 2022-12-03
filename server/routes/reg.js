const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const userModel = require("../models/userModel");

const salt = 10;

router.post("/reg", async (req, res) => {
    console.log(1);
    userModel.find({
        mail: req.body.mail
    }).then((data) => {
        console.log(2);
        if (data.length) {
            console.log(3);
            res.status(400).json("User Already Exist")
        } else {
            console.log(4);
            bcrypt.genSalt(salt).then((saltHash) => {
                console.log(5);
                bcrypt.hash(req.body.password, saltHash).then((hashedPassword) => {
                    console.log(6);
                    userModel.create({
                        mail: req.body.mail,
                        password: hashedPassword
                    }).then((userData) => {
                        console.log(7);
                        res.status(200).send({ userData });
                    })
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    })
})

module.exports = router;