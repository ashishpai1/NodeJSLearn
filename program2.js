var fs = require('fs');

fs.readFile(process.argv[2],'utf8', function(err, result){
	console.log(result.toString().split("\n").length-1);
});

