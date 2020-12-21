const path = require("path");

// Creates a absolute path from the directory specified.
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

// Util provides several helper functions.
const util = require("util");
util.log(" ^ The name of the current file");

// v8 is a core module that gives us memory information.
const v8 = require("v8");
util.log(v8.getHeapStatistics());
