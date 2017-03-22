// server.js

'use strict'

// Modules =============================
// express server middleware for node
let express = require('express');
// Create the application with express
let app = express();
// mongoose middleware for mongodb
let mongoose = require('mongoose');
// log requests to the console
let morgan = require('morgan');
// pull information from HTML POST
let bodyParser = require('body-parser');
// simulate DELETE and PUT
let methodOverride = require('method-override');
// path
let path = require('path');

// Configuration =============================
// Database
let database = require('./config/database.js');
// Connect to mongoDB
mongoose.connect(database.url);
// Set the port
const PORT = 8081;

// Set the static files location
app.use(express.static(path.join(__dirname + '/public')));
// Log every request to the console
app.use(morgan('dev'));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// Parse application/json
app.use(bodyParser.json());
// Parse application/vnd.api+json as json
app.use(bodyParser.json({'type':'application/vnd.api+json'}));

// Allow access to node_modules from /scripts path in html
//app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

app.use(methodOverride());

// Routes =============================
// Configure our routes
require('./app/routes.js')(app);

// Make clean angular url works
app.use(function(req, res) {
		//console.log(path.join(__dirname, '/public/index.html'));
		res.sendFile(path.join(__dirname, '/public/index.html'));
    //res.sendFile(__dirname + '/public/index.html');
});



// Requires multiparty
let multiparty = require('connect-multiparty');
let multipartyMiddleware = multiparty();

// Requires controller
// UserController = require('./controllers/UserController');

// let UserController = function() {};
//
// UserController.prototype.uploadFile = function(req, res) {
//     // We are able to access req.files.file thanks to
//     // the multiparty middleware
//     var file = req.files.file;
//     console.log(file.name);
//     console.log(file.type);
// }

// let router = express.Router();

// Example endpoint
app.post('/api/upload', multipartyMiddleware, (req, res) => {
  //multipartyMiddleware, UserController.uploadFile
  var file = req.files.file;
  console.log(file.name);
  console.log(file.type);
});



// Startup our app
app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
