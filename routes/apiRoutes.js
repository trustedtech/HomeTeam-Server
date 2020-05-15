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
    db.Member.find({username: username}).then((user) => {

        bcrypt.compare(password, user.password, function(err, result) {
            if (result) {
                const token = jwt.sign({...user}, 'shhh')
                console.log('token', token)
                res
                  .cookie('token', token, {httpOnly: true})
                  .json(user);
            } else {
                res.sendStatus(401)
            }
        });

    })
    const userId = '123';
    const token = jwt.sign({username, userId}, 'shhh');
    console.log('token', token);

    res
      .cookie('token', token, {httpOnly: true})
      .send('You are logged in...');
});

router.post('/api/register', (req, res, next) => {
    const {username, password} = req.body;
    db.Member.find({username: username}).then((user) => {
        if (user) {
            res.sendStatus(402).send('username exists')
        } else {
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    if (err) next(err);
                    db.Member.create({
                        username,
                        password: hash
                    })
                })
            })
        }
    })
});

router.get('/protected/dashboard', (req, res, next) => {
    console.log('req.user', req.user);

    res.send('Here is the dashboard (protected)')
});

module.exports = router;