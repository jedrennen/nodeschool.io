// JUGGLING ASYNC (Exercise 9 of 13)

//
//  OFFICIAL SOLUTION
// 
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
// 	for (var i = 0; i < 3; i++)
// 		console.log(results[i])
// }
//
// function httpGet (index) {
// 	http.get(process.argv[2 + index], function (response) {
// 		response.pipe(bl(function (err, data) {
// 			if (err)
// 				return console.error(err)
//
// 			results[index] = data.toString()
// 			count++
//
// 			if (count == 3)
// 				printResults()
// 		}))
// 	})
// }
//
// for (var i = 0; i < 3; i++)
// 	httpGet(i)

// MY SOLUTION
var http = require('http');

var numComplete = 0;
var numUrls = process.argv.length - 2;
var results = [];
for (var i = 0; i < numUrls; i++) {
	results[i] = null;
}

for (var i = 0; i < numUrls; i++) {
	(function(index) {
		results[index] = '';
		http.get(process.argv[2 + index], function(res) {
			res.setEncoding('utf8');
			res.on('data', function(data) {
				results[index] += data;
			});
			res.on('end', function() {
				numComplete++;
				if (numComplete == numUrls) {
					for (var j = 0; j < results.length; j++)
						console.log(results[j]);
				}
			})
		})
	})(i);
}
