const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const collectAnswers = (questions, done) => {
  const answers = [];

  const questionAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(questions[answers.length], questionAnswered);
};

const questions = [
  "What is your Name? ",
  "What is your favourite color? ",
  "Which Country are you in? ",
];

collectAnswers(questions, (answers) => {
  console.log(`\nAnswers you entered are:`);
  answers.forEach((answer) => console.log(answer));
  process.exit(0);
});
