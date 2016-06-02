// ExpressWorks: 02-Static
var express = require('express'),
    path = require('path');

var app = express(),
    port = process.argv[2]
    filePath = process.argv[3];

app.use(express.static(filePath || path.join(__dirname, 'public')));

app.listen(port);