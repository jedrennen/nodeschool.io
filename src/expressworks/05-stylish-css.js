// ExpressWorks: 05-Stylish CSS
var express = require('express')
	path = require('path')
	stylus = require('stylus');

var app = express();

app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'public')));

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);


/** main.styl */
/**

p
	color red
	
 **/


/** index.html */
/**

<html>
<head>
	<title>expressworks</title>
	<link rel="stylesheet" type="text/css" href="/main.css" />
</head>
<body>
	<p>I am red!</p>
</body>
</html>

 **/
