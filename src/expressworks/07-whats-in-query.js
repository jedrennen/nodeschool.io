// ExpressWorks: 07-WHAT'S IN QUERY
var express = require('express');

var app = express();

app.get('/search', function(req, res) {
	qsdata = JSON.stringify(req.query);
	res.end(qsdata);
	// OR
	// res.send(req.query);
});

app.listen(process.argv[2]);