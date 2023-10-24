'use strict';

// Ask the user's name
const userName = prompt("What's your name?");
const welcomeMessage = `Welcome, ${userName}! Let's play a game. Answer yes or no to the following questions.`;

// Display the welcome message
alert(welcomeMessage);

// Define arrays for questions and correct answers
const questions = [
    "Guess, does Qilin like coding? (yes/no)",
    "Guess, have Qilin traveled to more than 3 countries? (yes/no)",
    "Guess, is Qilin's favorite color blue? (yes/no)",
    "Guess, does Qilin enjoy hiking? (yes/no)",
    "Guess, can Qilin ride a skateboard? (yes/no)"
];

const correctAnswers = ["yes", "no", "no", "yes", "yes"];

// Function to ask a yes/no question and check the answer
function askQuestion(question, correctAnswer) {
    const userAnswer = prompt(question).toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct!");
        console.log(`User answered question correctly: ${question}`);
    } else {
        alert("Incorrect.");
        console.log(`User answered question incorrectly: ${question}`);
    }
}

// Ask the questions using a loop
for (let i = 0; i < questions.length; i++) {
    askQuestion(questions[i], correctAnswers[i]);
}