var path = require('path');
var express = require('express');
var mongoose       = require('mongoose');
var app = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.json());
var port = process.env.PORT || 7890;
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, 'public')));


exports = module.exports = app;
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);
