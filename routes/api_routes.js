// const router = require('express').Router();
// const fs = require("fs");
// const path = require("path");
// const db = require("../");

module.exports = function(app) {

    // Check status of API
    app.get('/api', function(req, res) {
        console.log('API is operational');
    });

    // Authenticate existing member; Return webtoken, member ID and household ID
    app.get('/api/member', function(req, res) {
        console.log('Route active');
    });

    // Register new member
    app.post('/api/member', function(req, res) {        
        console.log('Route active');
    });

    // Update existing member
    app.put('/api/member/:id', function(req, res) {
        console.log('Route active');
    });

    // Get dashboard data for member and/or household views
    app.get('/api/dashboard/', function(req, res) {
        console.log('Route active');
    });
}