'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent.textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// const x = function () {
//   console.log(23);
// };

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🙊🚫';

    // When player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highestScore) highestScore = score;
    document.querySelector('.highscore').textContent = highestScore;

    // When guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 🙉🙉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game! 😔💥';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // When guess is too low
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 🙈🙈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game! 😔💥';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the
player can make a new guess! Here is how:

1. Select the element with the 'again' class and
attach a click event handler
2. In the handler function, restore initial values of
the score and number variables
3. Restore the inital conditions of the message,
number, score and guess input field
4. Also restore the original background color (#222)
and number width (15rem)

*/

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
