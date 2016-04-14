
var fs = require('fs');

var path = require('path');


module.exports = function(directoryName, ext, cb){
	fs.readdir(directoryName, function(err, result){
		if(err){
		   return cb(err);  // return after callback
		}
		var myRes = [];
		result.forEach(function(pth){
			//console.log(path.extname(pth));
			if(path.extname(pth) === '.'+ext){
				myRes.push(pth);
			}
		});
		cb(null, myRes);
	});
}

/*
var pathName = process.argv[2];
var fileExtention = process.argv[3];
fs.readdir(pathName, function(err, result){
	result.forEach(function(pth){
		//console.log(path.extname(pth));
		if(path.extname(pth) === '.'+fileExtention){
			console.log(pth);
		}
	});
});
*/

/*

 You must write a module file to do most of the work. The module must  
  export a single function that takes three arguments: the directory name,  
  the filename extension string and a callback function, in that order. The  
  filename extension argument must be the same as what was passed to your  
  program. Don't turn it into a RegExp or prefix with "." or do anything  
  except pass it to your module where you can do what you need to make your  
  filter work.  
   
  The callback function must be called using the idiomatic node(err, data)  
  convention. This convention stipulates that unless there's an error, the  
  first argument passed to the callback will be null, and the second will be  
  your data. In this exercise, the data will be your filtered list of files,  
  as an Array. If you receive an error, e.g. from your call to  
  fs.readdir(), the callback must be called with the error, and only the  
  error, as the first argument.  
   
  You must not print directly to the console from your module file, only  
  from your original program.  
   
  In the case of an error bubbling up to your original program file, simply  
  check for it and print an informative message to the console.  
   
  These four things are the contract that your module must follow.  
   
   » Export a single function that takes exactly the arguments described.      
   » Call the callback exactly once with an error or some data as described.     
   » Don't change anything else, like global variables or stdout.              
   » Handle all the errors that may occur and pass them to the callback.       
   
  The benefit of having a contract is that your module can be used by anyone  
  who expects this contract. So your module could be used by anyone else who  
  does learnyounode, or the verifier, and just work.  
   
 ─────────────────────────────────────────────────────────────────────────────  
  


   */


