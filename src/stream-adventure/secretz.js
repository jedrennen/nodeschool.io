var crypto = require('crypto'),
	zlib = require('zlib'),
	tar = require('tar'),
	concat = require('concat-stream');
	
var tarParser = tar.Parse();
tarParser.on('entry', function (entry) {
	if (entry.type !== 'File') return;
	
	var hasher = crypto.createHash('md5', { encoding: 'hex' })
	entry.pipe(hasher)
		.pipe(concat(function (hash) {
			console.log(hash + ' ' + entry.path);
		}));
});

process.stdin
	.pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
	.pipe(zlib.createGunzip())
	.pipe(tarParser);
