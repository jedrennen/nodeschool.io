// ExpressWorks: 06-PARAM PAM PAM
var express = require('express'),
	crypto = require('crypto');

var app = express();

app.put('/message/:id', function(req, res) {
	var id = req.params.id;
	res.end(crypto.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex'));
});

app.listen(process.argv[2]);