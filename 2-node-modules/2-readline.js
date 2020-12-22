const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How do you like node?", (answer) => {
  console.log(`Your answer is:  ${answer}`);
  process.exit(0);
});
