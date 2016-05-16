var net = require('net'),
	strftime = require('strftime');

var server = net.createServer(function (socket) {
	var timestamp = strftime('%F %R\n', new Date());
	socket.write(timestamp);
	socket.end();
});
server.listen(process.argv[2]);
