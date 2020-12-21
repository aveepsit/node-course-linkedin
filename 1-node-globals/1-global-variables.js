// Global variables that store the full dir path and the filename.

console.log(__dirname);
console.log(__filename);

// Module JS Pattern to load modules. Load modules using the load function.
//  Here we use th path module that comes along with node installation.
// Every Node JS File is referred to a module and we can use requires to load other modules.
const path = require("path");
console.log(`The filename is ${path.basename(__filename)}`);

// Using ES6 method we can also use: [BUT ES6 is not supported by most browsers. Needs Babble]
// import { basename } from "path";
// console.log(`The filename is ${basename(__filename)}`);
