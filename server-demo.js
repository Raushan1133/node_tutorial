// let core_modules = require('./core_modules.js');
// let script = require('./script.js');

// Importing Modules
let exporting_modules = require('./exporting_modules');
let age= exporting_modules.age;
console.log('Age is: '+age);

let sum = exporting_modules.addNumber(10,20);
console.log('Sum is: '+sum);