'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// document.querySelector('.highscore').textContent = 30;

// Create a secret number variable.

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
let score = 20;
// Add event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //    When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // when players wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
