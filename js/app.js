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









// for lab 3 only

// User's 6th question for guessing a number
function guessNumber() {
    let correctNumber = 7; // Change this to your desired number
    for (let i = 0; i < 4; i++) {
        let userGuess = parseInt(prompt("Guess a number (1-10):"));
        if (userGuess === correctNumber) {
            alert("Correct! You guessed the right number.");
            console.log("User guessed the correct number.");
            break;
        } else if (userGuess < correctNumber) {
            alert("Too low. Try again.");
            console.log("User guessed too low.");
        } else if (userGuess > correctNumber) {
            alert("Too high. Try again.");
            console.log("User guessed too high.");
        }
    }
    alert("The correct number was 7.");
    console.log("User didn't guess the correct number.");
}

// Call the new function when you reach this point in your script
guessNumber();


// User's 7th question with multiple possible answers
function guessMultipleAnswers() {
    const possibleAnswers = ["apple", "banana", "blackberries", "tomatoes"];
    for (let i = 0; i < 6; i++) {
        let userAnswer = prompt("Guess my favorite fruits/veggies (lower case & answer in plural only please):");
        if (possibleAnswers.includes(userAnswer.toLowerCase())) {
            alert("Correct! That's one of the possible answers.");
            console.log("User guessed a correct answer.");
            break;
        } else {
            alert("Try again.");
            console.log("User guessed an incorrect answer.");
        }
    }
    alert("Possible answers were: " + possibleAnswers.join(", "));
    console.log("User didn't guess a correct answer.");
}

// Call the new function when you reach this point in your script
guessMultipleAnswers();


// Track the number of correct answers
let correctAnswers = 0;

// Function to check if the user's answer is correct
function checkAnswer(question, correctAnswer) {
    const userAnswer = prompt(question).toLowerCase();
    if (userAnswer === correctAnswer) {
        alert("Correct!");
        console.log(`User answered correctly: ${question}`);
        correctAnswers++;
    } else {
        alert("Incorrect.");
        console.log(`User answered incorrectly: ${question}`);
    }
}

// Call checkAnswer for each question
checkAnswer("Question 1: Do you like coding? (yes/no)", "yes");
checkAnswer("Question 2: Have you traveled to more than 3 countries? (yes/no)", "no");
checkAnswer("Question 3: Is your favorite color blue? (yes/no)", "no");
checkAnswer("Question 4: Do you enjoy hiking? (yes/no)", "yes");
guessNumber(); // For the 6th question
guessMultipleAnswers(); // For the 7th question

// Display the final score
alert(`You got ${correctAnswers} out of 7 questions correct.`);
console.log(`User's final score: ${correctAnswers}/7`);

