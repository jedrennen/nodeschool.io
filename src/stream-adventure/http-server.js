var http = require('http'),
	th2 = require('through2');

http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(th2(function(buffer, _, next) {
			this.push(buffer.toString().toUpperCase());
			next();
		}))
		.pipe(res);
	} else {
		res.end("Send me a POST!\n");
	}
}).listen(process.argv[2]);
