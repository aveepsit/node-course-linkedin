// Process used to find basic process details.
console.log(`Process ID: ${process.pid}`); // Process ID of the node process.
console.log(`Node Version: ${process.versions.node}`); // Node Version of the process.

// Process.argv returns array of command line arguments used to run the command.
// Splits command line input by spaces.
console.log(`Process Argv:`);
console.log(process.argv);
const [, , f_name, l_name] = process.argv;
console.log(`Your name is ${f_name} ${l_name}.`);

// Fetching Specific Argument based on flags
const grab = (flag) => {
  let index_after_flag = process.argv.indexOf(flag) + 1;
  return process.argv[index_after_flag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`Greeting: ${greeting}. User: ${user}`);

// OUTPUT:
// [aveepsit@desktop 1-node-globals]$ node process.js Avee Chow --greeting "How are you" --user Alex
// Process ID: 268199
// Node Version: 10.21.0
// Process Argv:
// [ '/usr/bin/node',
//   '/home/aveepsit/Desktop/WorkPlace/Programming/WebDevelopment/8-Node-LinkedIn-Course/node-course-linkedin/1-node-globals/process.js',
//   'Avee',
//   'Chow',
//   '--greeting',
//   'How are you',
//   '--user',
//   'Alex' ]
// Your name is Avee Chow.
// Greeting: How are ypu. User: Alex
