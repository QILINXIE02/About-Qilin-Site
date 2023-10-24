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
    const possibleAnswers = ["apple", "banana", "cherry", "date"];
    for (let i = 0; i < 6; i++) {
        let userAnswer = prompt("Guess a fruit:");
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
