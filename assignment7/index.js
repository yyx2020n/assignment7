var correctNumber;
var previousGuesses = [];
var guessesLeft = 5;

function checkGuess() {
  // Get the user's guess
  var guess = document.getElementById('guess').value;

  // Check if the user's guess is correct
  if (guess == correctNumber) {
    document.getElementById('result').innerHTML = 'Congratulations! You guessed the correct number.';
  } else if (guess > correctNumber) {
    document.getElementById('result').innerHTML = 'Your guess is too high.';
  } else {
    document.getElementById('result').innerHTML = 'Your guess is too low.';
  }

  // Check if the user is close or far from the correct number
  if (Math.abs(guess - correctNumber) <= 5) {
    document.getElementById('result').innerHTML += ' You are close!';
  } else {
    document.getElementById('result').innerHTML += ' You are far.';
  }

  // Update the list of previous guesses
  previousGuesses.push(guess);
  document.getElementById('previousGuesses').innerHTML = 'Previous guesses: ' + previousGuesses.join(', ');

  // Decrement the number of guesses left
  guessesLeft--;

  // Check if the user has run out of guesses
  if (guessesLeft == 0) {
    document.getElementById('result').innerHTML = 'You lose! The correct number was ' + correctNumber + '.';
    document.getElementById('submit').disabled = true;
    document.getElementById('hint').disabled = true;
  }
}

function giveHint() {
  if (correctNumber % 2 == 0) {
    document.getElementById('result').innerHTML = 'The correct number is even.';
  } else {
    document.getElementById('result').innerHTML = 'The correct number is odd.';
  }
}

function resetGame() {
  // Generate a new random number
  correctNumber = Math.floor(Math.random() * 100) + 1;

  // Reset the list of previous guesses and the number of guesses left
  previousGuesses = [];
  guessesLeft = 5;

  // Enable the "Submit" and "Hint" buttons
  document.getElementById('submit').disabled = false;
  document.getElementById('hint').disabled = false;

  // Clear the result message and the list of previous guesses
  document.getElementById('result').innerHTML = '';
  document.getElementById('previousGuesses').innerHTML = '';
}

// Generate the initial random number
resetGame();
