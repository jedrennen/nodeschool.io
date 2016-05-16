var http = require('http'),
	fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, res) {
	// I forgot to include this, although it is not required to pass the test
	// res.writeHead(200, {'content-type': 'text/plain'});
	fs.createReadStream(filePath)
		.pipe(res);
});
server.listen(port);
