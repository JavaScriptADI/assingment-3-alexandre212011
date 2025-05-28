const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (parseInt(guess) !== secretNumber) {
  guess = prompt("Guess a number between 1 and 10:");

  if (parseInt(guess) < secretNumber) {
    alert("Too low! Try again.");

  } else if (parseInt(guess) > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert("You guessed it right!");
  }
}