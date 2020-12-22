const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done = () => {}) => {
  const answers = [];

  const questionAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      rl.close();
      done(answers);
    }
  };

  rl.question(questions[answers.length], questionAnswered);
};
