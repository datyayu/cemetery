//Dependencies
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Custom modules.
var routes = require('./routes/all');

//Create a mongoose connection
mongoose.connect('mongodb://localhost/generator-mean-test');

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Configure middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Use the public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

//Create the routes
app.get('/', routes.index);
app.get('/todo', routes.getTodo);
app.post('/todo', routes.postTodo);

//Set port to env.Port or default to 3000
app.set('port', process.env.PORT || 3000);

//Listen to port for connections
app.listen(app.get('port'), function() {
  console.log('App listening at port ' + app.get('port'));
});
