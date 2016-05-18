var wss = require('websocket-stream');

var stream = wss('ws://localhost:8099');
stream.write("hello\n");
