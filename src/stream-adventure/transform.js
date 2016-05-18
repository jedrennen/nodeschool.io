var th2 = require('through2');

process.stdin.pipe(th2(
	function(buffer, _, next) {
		this.push(buffer.toString().toUpperCase());
		next();
	}
)).pipe(process.stdout);
