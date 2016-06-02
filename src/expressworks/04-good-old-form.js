// ExpressWorks: 04-Good Old Form
var express = require('express'),
	bodyparser = require('body-parser');

var app = express();

// Middleware
app.use(bodyparser.urlencoded({ extended: false }));

// Routes
app.post('/form', function(req, res) {
	res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);