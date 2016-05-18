var combine = require('stream-combiner'),
	split = require('split'),
	through = require('through2'),
	zlib = require('zlib');

module.exports = function() {
	var genreBooks = {
		"name": "",
		"books": []
	};
	var groupBooks = through({objectMode: true},
		function (line, _, next) {
			if (line.length === 0) return next();
			var row = JSON.parse(line);
			
			if (row.type == 'genre') {
				if (genreBooks.name != '')
					this.push(JSON.stringify(genreBooks) + '\n');
				genreBooks.name = row.name;
				genreBooks.books = [];
			} else if (row.type == 'book') {
				genreBooks.books.push(row.name);
			}
			next();
		}, function (done) {
			if (genreBooks.name != '')
				this.push(JSON.stringify(genreBooks) + '\n');
			done();
		}
	)
	return combine(
		split(),
		groupBooks,
		zlib.createGzip()
	);
};
