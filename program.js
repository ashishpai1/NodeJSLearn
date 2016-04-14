var arg = process.argv;



var sum = 0;

for (var i = 0; i < arg.length; i++) {
	if(i>1){
		sum = sum + Number(arg[i]);
	}
}

console.log(sum);
