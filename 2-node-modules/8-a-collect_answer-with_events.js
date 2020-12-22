const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { EventEmitter } = require("events");

module.exports = (questions, done = () => {}) => {
  const answers = [];
  const events = new EventEmitter();

  const questionAnswered = (answer) => {
    events.emit("answer", answer);
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      rl.close();
      events.emit("complete", answers);
      done(answers);
    }
  };

  rl.question(questions[answers.length], questionAnswered);
  return events;
};
