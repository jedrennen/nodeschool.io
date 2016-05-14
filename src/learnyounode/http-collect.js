var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
	res.setEncoding('utf8');
	var collection = '';
	res.on("data", function(data) {
		collection += data;
	}).on("end", function() {
		console.log(collection.length);
		console.log(collection);
	})
})

// 
// OFFICIAL SOLUTION
//
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
// 	response.pipe(bl(function (err, data) {
// 		if (err)
// 			return console.error(err)
// 		data = data.toString()
// 		console.log(data.length)
// 		console.log(data)
// 	}))
// })
