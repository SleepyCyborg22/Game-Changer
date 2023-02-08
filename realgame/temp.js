var dict = {};
dict["roror"] = 1000;
dict.abc = 956;
console.log(dict);

console.log(new Date());
var tdate = new Date();
// tdate = JSON.stringify(tdate);
tdate = tdate.getTime().toString();

tdate+='.json'
console.log(tdate);

const Fs = require('fs-extra')
 
Fs.ensureFile(tdate+'.json')

