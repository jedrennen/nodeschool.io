var http = require('http');
var PORT = 5000;
var server = http.createServer(function(req, res) {
    res.end('It works!! Path Hit: ' + req.url);
}).listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
