var request = require('request');

var reqStream = request.post('http://localhost:8099');

process.stdin
	.pipe(reqStream)
	.pipe(process.stdout);
