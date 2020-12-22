const collectAnswers = require("./6-a-collect_answers");

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
