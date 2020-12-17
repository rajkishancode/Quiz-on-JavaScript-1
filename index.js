/**
 * Concept of this lesson?
 * (a) Array,
 * (b) accessing it with an index
 * (c) length of the array
 */

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to Raj's Quiz on JavaScript");

/**
 * list of something is an array
 */

const queBank = [
	{
		question: `
	Which type of JavaScript language is?
	a: Object-Oriented
	b: Object-Based
	c: Assembly-language\n`,
		answer: "b"
	},
	{
		question: `
	The "function" and "var" are known as: ?
	a: Keywords
	b: Declaration statements\n`,
		answer: "b"
	},
	{
		question: `
	Which one of the following is the correct way for calling the javascript code?
	a: Function/Method
	b: Triggering Event
	c: RMI
	d: Preprocessor\n`,
		answer: "a"
	},
	{
		question: `
	In the JavaScript, which one of the following is not considered as an error?
	a: Syntax error
	b: Division by zero
	c: Missing of Bracket\n`,
		answer: "b"
	}
];

let questionIndex = 0;

function question() {
	rl.question(queBank[questionIndex].question, (answer) => {
		console.log(`You answered: ${answer}`);

		if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
			console.log("right answer");
			questionIndex++;
			serve();
		} else {
			console.log("wrong answer");
			console.log("try again");
			question();
		}
	});
}

function serve() {
	if (isQuestionBankExhausted()) {
		console.log("thanks for playing....");
		rl.close();
	} else {
		rl.question("what do you want to do? \n Press e to exit, any other key to continue....  ", (choice) => {
			console.log(`You selected ${choice}`);

			if (choice.toLowerCase() !== "e") {
				question();
			} else {
				console.log("thanks for playing....");
				rl.close();
			}
		});
	}
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
	if (queBank.length == questionIndex) {
		return true;
	}
}

serve();
