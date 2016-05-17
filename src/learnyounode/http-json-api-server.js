// OFFICIAL SOLUTION 
//
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
// 	return {
// 		hour: time.getHours(),
// 		minute: time.getMinutes(),
// 		second: time.getSeconds()
// 	}
// }

// function unixtime (time) {
// 	return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
// 	var parsedUrl = url.parse(req.url, true)
// 	var time = new Date(parsedUrl.query.iso)
// 	var result

// 	if (/^\/api\/parsetime/.test(req.url))
// 		result = parsetime(time)
// 	else if (/^\/api\/unixtime/.test(req.url))
// 		result = unixtime(time)

// 	if (result) {
// 		res.writeHead(200, { 'Content-Type': 'application/json' })
// 		res.end(JSON.stringify(result))
// 	} else {
// 		res.writeHead(404)
// 		res.end()
// 	}
// })
// server.listen(Number(process.argv[2]))
	 
// MY SOLUTION	 
var http = require('http'),
	url = require('url');

http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	if (req.method == 'GET' && parsedUrl.pathname == '/api/parsetime') {
		var iso = new Date(parsedUrl.query.iso);
		res.writeHead(200, { 'content-type': 'application/json' });
		res.write(JSON.stringify({
			"hour": iso.getHours(),
			"minute": iso.getMinutes(),
			"second": iso.getSeconds()
		}));
		res.end();
	} else if (req.method == 'GET' && parsedUrl.pathname == '/api/unixtime') {
		var unixTime = (new Date(parsedUrl.query.iso)).getTime();
		res.writeHead(200, {'content-type': 'application/json'});
		res.write(JSON.stringify({
			"unixtime": unixTime
		}));
		res.end();
	} else {
		res.end(":(");
	}
}).listen(process.argv[2]);
