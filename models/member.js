const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const uniqueValidator = require('mongoose-unique-validator');
// const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
// const secret = require('../config').secret;

const MemberSchema = new Schema({

    firstname: {
        type: String, 
        trim: true,
        // required: [true, "A valid first name is required"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
    },

    lastname: {
        type: String, 
        trim: true,
        // required: [true, "A valid last name is required"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
    },

    alias: {
        type: String,
        trim: true,
        // default: ,
        // unique: true,
        // required: [true, "A valid moniker is required"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
    },

    email: {
        type: String, 
        // lowercase: true,
        unique: true, 
        // required: [true, "A valid email address is required"], 
        // match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },

    username: {
        type: String, 
        // lowercase: true, 
        unique: true, 
        trim: true,
        required: [true, "A valid username is required"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true
    },

    password: {
        type: String, 
        required: [true, "A valid password is required"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        // validate: [({ length }) => length >= 8, "Password must be at least eight characters."]
    },

    theme: String // personalized color choice
    // ,

    // mobileNum: {
        // type: Number,
        // 
    // birthdate: Date,
    // avatar: String,
    // status: String,
    // household: String,

    // hash: String,
    // salt: String

},{timestamps: true});

// Create a method to set default moniker from first and last names

// Create a method to check current household 

// Create a method to validate unique username
    // UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// Create a method for setting User passwords
    // UserSchema.methods.setPassword = function(password){
    //   this.salt = crypto.randomBytes(16).toString('hex');
    //   this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };

// Create a method to validate passwords
    // UserSchema.methods.validPassword = function(password) {
    //     const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    //     return this.hash === hash;
// };

// Create a method on the user model to generate a JWT
    // UserSchema.methods.generateJWT = function() {
        // const today = new Date();
        // const exp = new Date(today);
        // exp.setDate(today.getDate()  60);

        // return jwt.sign({
            // id: this._id,
            // username: this.username,
            // exp: parseInt(exp.getTime() / 1000),
    // }, secret);
// };

// Create a method to get the JSON representation of a user for authentication
    // UserSchema.methods.toAuthJSON = function(){
        // return {
            // username: this.username,
            // email: this.email,
            // token: this.generateJWT(),
            // bio: this.bio,
            // image: this.image
    // };
// };

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;