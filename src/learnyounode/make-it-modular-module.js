var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
	var filter = '.' + ext;
	fs.readdir(dirname, function(err, files) {
		if (err)
			return callback(err, null);
			
		var result = [];
		files.forEach(function(entry) {
			if (path.extname(entry) == filter)
				result.push(entry);
		});
		callback(null, result);
	});
};
