// ExpressWorks: 03-Jade
var express = require('express'),
	path = require('path');

var app = express(),
	port = process.argv[2],
	tempIndex = process.argv[3];

app.set('views', tempIndex || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
	res.render('index', { date: new Date().toDateString() });
});

app.listen(port);