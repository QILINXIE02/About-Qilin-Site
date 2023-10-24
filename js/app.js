'use strict';

// Function to ask a yes/no question and then check the answer
function askQuestion(question, correctAnswer) {
    const userAnswer = prompt(question);
    
    if (userAnswer === null) {
        alert("Game Over. You canceled the game.");
    return;
    }

    const userAnswerNormalized = userAnswer.toLowerCase().trim();
    if (userAnswerNormalized === correctAnswer) {
        alert("Correct!");
        console.log(`User answered question correctly: ${question}`);
    } else {
        alert("Incorrect.");
        console.log(`User answered question incorrectly: ${question}`);
    }
}

// Ask the user's name
const userName = prompt("What's your name?");
if (userName) {
    const welcomeMessage = `Welcome, ${userName}! Let's play a game. Answer yes or no to the following questions.`;

    // Display the welcome message
    alert(welcomeMessage);

    // Define questions and answers
    const questions = [
        "Guess, does Qilin like coding? (yes/no)",
        "Guess, has Qilin traveled to more than 3 countries? (yes/no)",
        "Guess, is Qilin favorite color blue? (yes/no)",
        "Guess, does Qilin enjoy hiking? (yes/no)",
        "Guess, can Qilin ride a skateboard? (yes/no)",
    ];

    const correctAnswers = ["yes", "no", "no", "yes", "yes"];

    // Ask the questions using a loop
    for (let i = 0; i < questions.length; i++) {
        askQuestion(questions[i], correctAnswers[i]);
    }
} else {
    alert("Game Over. You canceled the game.");
}
