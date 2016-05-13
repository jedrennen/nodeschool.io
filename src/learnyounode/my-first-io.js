var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var lines = buf.toString().split('\n');

// Alternate
// var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n');

console.log(lines.length - 1);
