const express = require('express');
// const apiRoutes = require('./routes/api_routes');
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/api_routes.js')(app);

// If deployed in production environment (usually on heroku), use React's /build folder  to serve up static assets instead of public
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }
// app.use(express.static('public'));

// Add API routes
// app.use('/api', apiRoutes);

const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hometeam', { useNewUrlParser: true });

const db = require('./models');

app.listen(PORT, function() {
    console.log('Server listening on PORT ${PORT}');
});  