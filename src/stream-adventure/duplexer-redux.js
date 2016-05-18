var dup2 = require('duplexer2'),
	th2 = require('through2');


module.exports = function (counter) {
	var counts = {};
	var inStream = th2({objectMode: true },
		function (buff, _, next) {
			var countryCode = buff.country;
			(counts[countryCode]) ?
				counts[countryCode]++ :
				counts[countryCode] = 1;
			next();
		}, function (done) {
			counter.setCounts(counts);
			done();
		}
	);
	return dup2({objectMode: true}, inStream, counter);
}
