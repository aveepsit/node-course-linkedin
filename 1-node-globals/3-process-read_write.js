// process.stdout is a writeable stream to process to standard output.
process.stdout.write("Hello ");
process.stdout.write("World!!!\n\n\n");

// Advanced printing with stdout
process.stdout.write("This line will be deleted!");
process.stdout.clearLine(); // Cleans the current line in the stdout.
process.stdout.cursorTo(0); // Takes the cursor to a specific char position.
process.stdout.write("The line above is missing!");

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
