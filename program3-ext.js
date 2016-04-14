var program3 = require('./program3.js');
var pathName = process.argv[2];
var fileExtention = process.argv[3];


program3(pathName,fileExtention, function(err, list){
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
	console.log(file);
  });

});


