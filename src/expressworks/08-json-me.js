// ExpressWorks: 08-JSON ME
var express = require('express'),
	fs = require('fs');

var app = express();

app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		res.json(JSON.parse(data));
	});
});

app.listen(process.argv[2]);

/** OFFICIAL SOLUTION **/
/**
	var express = require('express')
    var app = express()
    var fs = require('fs')

    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })

    app.listen(process.argv[2])
 **/