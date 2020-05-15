const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require('morgan');
const mongoose = require('mongoose');
const TokenHandler = require('./utils/TokenHandler');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // changed from true
app.use(cookieParser());
app.use(TokenHandler({whitelist: ['/', '/api', '/api/login', '/api/registration'] }));
app.use(helmet());
app.use(cors({origin: 'http://localhost:3000'}));
app.use(compression());
app.use(logger('dev'));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hometeam', { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log('Server listening on PORT ${PORT}');
});  

// If deployed in production environment (usually on heroku), use React's /build folder  to serve up static assets instead of public
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }
// app.use(express.static('public'));