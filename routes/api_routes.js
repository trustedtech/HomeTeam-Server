// const router = require('express').Router();
module.exports = function(app) {

    app.get("/api", function(req, res) {
        console.log('Route active');
    });

}

// module.exports = router; 