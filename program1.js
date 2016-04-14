var fs = require('fs');

var bufferObject = fs.readFileSync(process.argv[2]);

var stringContents = bufferObject.toString().split("\n");

console.log(stringContents.length-1);

