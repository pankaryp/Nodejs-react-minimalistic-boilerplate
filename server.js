// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Init App
const app = express();

// BodyParser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Require routes
const home = require('./routes/home');
// Use routes
app.use('/', home);

// Listen to port 3000 for connection
app.listen(5000 , function() {
    console.log('Server running on port 5000');
});