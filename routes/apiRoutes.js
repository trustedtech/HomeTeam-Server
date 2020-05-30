const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models');
// const fs = require("fs");
// const path = require("path");

router.get (['/', '/api'], (req, res, next) => {
    res.send('Welcome to HomeTeam Server! API is operational.');
});

router.post('/api/login', (req, res, next) => {
    const {username, password} = req.body;
    db.Member.findOne({username: username}).then((member) => {
        console.log(member);
        bcrypt.compare(password, member.password, function(err, result) {
            if (result) {
                delete member.email;                
                delete member.password;                
                const token = jwt.sign({...member}, process.env.JWT_SECRET)
                // console.log('token', token)
                //const {password, ...rest} = member;
                res
                  .cookie('token', token, {httpOnly: true})
                  .json(member);
            } else {
                res.sendStatus(401)
            }
        });
    })
    // const userId = '123';
    // const token = jwt.sign({username, userId}, 'shhh');
    // console.log('token', token);

    // res
    //   .cookie('token', token, {httpOnly: true})
    //   .send('You are logged in...');
});

router.post('/api/signup', (req, res, next) => {
    const {firstname, lastname, email, username, password} = req.body;
    db.Member.findOne({username: username}).then((member) => {
        // console.log(member);
        if (member) {
            res.status(400).send('username exists')
        } else {
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    if (err) next(err);
                    db.Member.create({
                        firstname,
                        lastname,
                        email,
                        username,
                        password: hash
                    })
                    //, {password: 0}
                    .then((member) => {
                        delete member.email;                
                        delete member.password;
                        res.json(member);
                    });
                });
            });
        }
    })
});

router.get('/dashboard', (req, res, next) => {
    console.log('req.member', req.member);

    res.send('Here is the dashboard (protected)')
});

module.exports = router;