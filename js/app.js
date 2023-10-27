'use strict';
 
function askYesNoQuestion(question, correctAnswer) {
  const userAnswer = prompt(question);
 
  if (userAnswer === null) {
    return false;
  }
 
  const userAnswerNormalized = userAnswer.toLowerCase().trim();
  return userAnswerNormalized === correctAnswer;
}
 
function guessNumber() {
  const correctNumber = 10;
 
  for (let i = 0; i < 4; i++) {
    const userGuess = parseInt(prompt('Guess a number (1-10):'));
 
    if (userGuess === correctNumber) {
      return true; // Correct guess
    } else if (userGuess < correctNumber) {
      alert('Too low. Try again.');
    } else {
      alert('Too high. Try again.');
    }
  }
 
  return false;
}
 
function guessMultipleAnswers() {
  const possibleAnswers = ['apples', 'cherries', 'blackberries', 'tomatoes'];
 
  for (let i = 0; i < 6; i++) {
    const userAnswer = prompt('Guess my favorite fruits/veggies (lower case & answer in plural only please):');
 
    if (possibleAnswers.includes(userAnswer.toLowerCase())) {
      return true; 
    } else {
      alert('Try again.');
    }
  }
 
  return false;
}
 
function startGame() {
  const userName = prompt("What's your name?");
 
  if (!userName) {
    alert('Game Over. You canceled the game.');
    return;
  }
 
  alert(`Welcome, ${userName}! Let's play a game. Answer yes or no to the following questions.`);
 
  let correctAnswers = 0;
 
  if (askYesNoQuestion('Does Qilin like coding?, Yes/No', 'yes')) {
    correctAnswers++;
  }
  if (askYesNoQuestion('Has Qilin traveled to more than 3 countries? Yes/No', 'no')) {
    correctAnswers++;
  }
  if (askYesNoQuestion("Is Qilin's favorite color blue? Yes/No", 'no')) {
    correctAnswers++;
  }
  if (askYesNoQuestion('Does Qilin enjoy hiking? Yes/No', 'yes')) {
    correctAnswers++;
  }
  if (askYesNoQuestion('Can Qilin ride a skateboard? Yes/No', 'yes')) {
    correctAnswers++;
  }
  if (guessNumber()) {
    correctAnswers++;
  }
  if (guessMultipleAnswers()) {
    correctAnswers++;
  }
 
  alert(`You got ${correctAnswers} out of 7 questions correct.`);
 
  alert('Today is 10/26! Have a good day!');
 
  alert('Game Over! Thanks!');
}

startGame();
 


