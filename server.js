const express = require('express');
// const apiRoutes = require('./routes/api_routes');
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require('morgan');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// const db = require('./models');

const jwTokenHandler = (configs)) => (req, res, next) => {
    if (configs.whitelist.includes(req.url)) {
        next();
    } else {
        const {token} = req.cookies;
        if (!token) return res.sendStatus(401);
        jwt.verify(token, 'shhh', (err, data) => {
            if (err) return res.sendStatus(403);
            req.user = data;
        })
        next();
    }
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // changed from true
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hometeam', { useNewUrlParser: true });

require('./routes/api_routes.js')(app);

app.listen(PORT, function() {
    console.log('Server listening on PORT ${PORT}');
});  

// If deployed in production environment (usually on heroku), use React's /build folder  to serve up static assets instead of public
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }
// app.use(express.static('public'));

// Add API routes
// app.use('/api', apiRoutes);

