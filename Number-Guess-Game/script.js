'use strict';
// random generate number between 1 and 20
// score decrement by 1 each time
// change background color when guessed right
// highscore changed based on player attempts
// hit again button to reset the random number and score

const app = {};

app.displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

app.getSecretNumber = function () {
  const answer = Math.floor(Math.random() * 20) + 1;
  console.log(answer);
  return answer;
};

app.gameStart = function () {
  const secretNumber = app.getSecretNumber();
  const checkBtn = document.querySelector('.check');
  let score = 20;
  checkBtn.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    const currentScore = document.querySelector('.score');
    const highScore = document.querySelector('.highscore');
    console.log(guess);
    if (!guess) {
      app.displayMessage('...Really???');
    } else {
      if (guess === secretNumber) {
        app.displayMessage('Correct!!!');
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        currentScore.textContent = score;
        if (Number(currentScore.textContent) > Number(highScore.textContent)) {
          highScore.textContent = currentScore.textContent;
        }
      } else if (guess !== secretNumber) {
        if (score > 1) {
          app.displayMessage(
            guess > secretNumber ? 'Too High!!!' : 'Too Low!!!'
          );
          score -= 1;
          currentScore.textContent = score;
        } else {
          app.displayMessage('You lost the game...');
          currentScore.textContent = 0;
        }
      }
    }
  });
};

app.gameReset = function () {
  const againBtn = document.querySelector('.again');
  againBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    app.displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    app.gameStart();
  });
};

app.init = function () {
  app.gameStart();
  app.gameReset();
};

app.init();
