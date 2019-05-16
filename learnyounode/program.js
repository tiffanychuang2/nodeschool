// console.log("HELLO WORLD");

// console.log(process.argv);

//var total = 0;

// for (i=2; i<process.argv.length; i++) {
//     total += Number(process.argv[i]);
// }

//console.log(total);

//"import fs module from node library"
var fs = require('fs');
//'/Users/tiffany.chuang2/eclipse-workspace/pair-columbus/learnyounode/test.txt'

//define buff as the argument that was given by the user (filepath to the file you want to use)
var buf = fs.readFileSync(process.argv[2]);
//process.argv[2]
// console.log(buf);
// console.log(buf.toString());

//translate buf to words
var newBuf=buf.toString();

// console.log(newBuf.split('\n'));

//transform string to array
var bufArray = newBuf.split('\n');

//count items in the array - 1 because the last line does not use \n
console.log(bufArray.length-1);


