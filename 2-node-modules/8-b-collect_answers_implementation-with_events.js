const collectAnswers = require("./8-a-collect_answer-with_events");

const questions = [
  "What is your Name? ",
  "What is your favourite color? ",
  "Which Country are you in? ",
];

const ansEvents = collectAnswers(questions, (answers) => {
  console.log(`\nAnswers you entered are:`);
  answers.forEach((answer) => console.log(answer));
  process.exit(0);
});

ansEvents.on("answer", (ans) => {
  console.log(`Answer Registered: ${ans}`);
});

ansEvents.on("complete", (ans) => {
  console.log(`Answering Completed >> Ans: ${ans}`);
});
