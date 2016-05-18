var th2 = require('through2'),
	split = require('split');
	
var currentLine = 0;
process.stdin
	.pipe(split())
	.pipe(th2(function (line, _, next) {
		currentLine++;
		if (currentLine % 2 == 0)
			this.push(line.toString().toUpperCase());
		else
			this.push(line.toString().toLowerCase());
		this.push('\n');
		next();
	}))
	.pipe(process.stdout);
