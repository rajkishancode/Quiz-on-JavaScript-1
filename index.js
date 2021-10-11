const chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question(chalk.blue("what is your name?"));
console.log(
  chalk.magentaBright.bold(
    "Hey",
    chalk.yellow(userName),
    "welcome to JavaScript Quiz ! "
  )
);

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.cyan(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Absolutely right!😇"));
    score = score + 1;
  } else {
    console.log(chalk.red("Its not right!😢"));
  }
  console.log("current score", score);
  console.log("________________________________");
}
const questions = [
  {
    question: `
	Which type of JavaScript language is?
	a: Object-Oriented
	b: Object-Based
	c: Assembly-language\n`,
    answer: "b",
  },
  {
    question: `
	The "function" and "var" are known as: ?
	a: Keywords
	b: Declaration statements\n`,
    answer: "b",
  },
  {
    question: `
	Which one of the following is the correct way for calling the javascript code?
	a: Function/Method
	b: Triggering Event
	c: RMI
	d: Preprocessor\n`,
    answer: "a",
  },
  {
    question: `
	In the JavaScript, which one of the following is not considered as an error?
	a: Syntax error
	b: Division by zero
	c: Missing of Bracket\n`,
    answer: "b",
  },
  {
    question: `
	Inside which HTML element do we put the JavaScript?
	a: <javascript>
	b: <js>
	c: <script>\n`,
    answer: "c",
  },
];
for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.yellow("YAY!!,your score is", score));
