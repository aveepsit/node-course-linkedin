// process.stdout is a writeable stream to process to standard output.
process.stdout.write("Hello ");
process.stdout.write("World!!!\n\n\n");

const questions = [
  "What is your Name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n${questions[i]}\n`);
  process.stdout.write(` > `);
};

ask();
// Stdin is a stream that takes input and created events on it.
// data event is called whenever there is a data input event from the console
// the on method is used to create handlers and without the process.exit it keeps on listening for input events.

process.stdin.on("data", (data) => {
  process.stdout.write(`\n\n${data.toString().trim()}\n`);
  process.exit();
});
