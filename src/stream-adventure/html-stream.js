var trumpet = require('trumpet')
	th2 = require('through2');

var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(th2(function(buff, _, next) {
		this.push(buff.toString().toUpperCase());
		next();
	}))
	.pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
