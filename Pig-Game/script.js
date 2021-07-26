'use strict';

// player reaches to 100 points win
// if any player gets 1, current round's score loses
// and move to next player's turn'

const app = {};
app.player0El = document.querySelector('.player--0');
app.player1El = document.querySelector('.player--1');
app.score0El = document.querySelector('#score--0');
app.score1El = document.querySelector('#score--1');
app.current0El = document.querySelector('#current--0');
app.current1El = document.querySelector('#current--1');
app.diceEl = document.querySelector('.dice');
app.btnNew = document.querySelector('.btn--new');
app.btnRoll = document.querySelector('.btn--roll');
app.btnHold = document.querySelector('.btn--hold');

app.gameStart = function () {
  app.score0El.textContent = 0;
  app.score1El.textContent = 0;
  app.current0El.textContent = 0;
  app.current1El.textContent = 0;
  app.diceEl.classList.add('hidden');
  app.player0El.classList.remove('player--winner');
  app.player1El.classList.remove('player--winner');
  app.player0El.classList.add('player--active');
  app.player1El.classList.remove('player--active');
  app.currentScore = 0;
  app.activePlayer = 0;
  app.scores = [0, 0];
  app.playing = true;
};

app.switchPlayer = function () {
  document.getElementById(`current--${app.activePlayer}`).textContent = 0;
  app.currentScore = 0;
  app.activePlayer = app.activePlayer === 0 ? 1 : 0;
  app.player0El.classList.toggle('player--active');
  app.player1El.classList.toggle('player--active');
};

app.gamePlay = function () {
  app.btnRoll.addEventListener('click', function () {
    if (app.playing) {
      // generating random dice
      const dice = Math.floor(Math.random() * 6) + 1;
      // display dice images based on dice
      app.diceEl.classList.remove('hidden');
      app.diceEl.src = `dice-${dice}.png`;
      // if rolled 1 => switch to next player
      if (dice !== 1) {
        app.currentScore += dice;
        document.getElementById(`current--${app.activePlayer}`).textContent =
          app.currentScore;
      } else {
        // switch to next player
        app.switchPlayer();
      }
    }
  });
};

app.holdScore = function () {
  app.btnHold.addEventListener('click', function () {
    if (app.playing) {
      // add current score to active player's score
      app.scores[app.activePlayer] += app.currentScore;
      document.querySelector(`#score--${app.activePlayer}`).textContent =
        app.scores[app.activePlayer];
      // check if player's score is >= 100
      if (app.scores[app.activePlayer] >= 100) {
        app.playing = false;
        app.diceEl.classList.add('hidden');
        document
          .querySelector(`.player--${app.activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${app.activePlayer}`)
          .classList.remove('player--active');
      } else {
        // switch to next player
        app.switchPlayer();
      }
    }
  });
};

app.resetGame = function () {
  app.btnNew.addEventListener('click', app.gameStart);
};

app.init = function () {
  app.gameStart();
  app.gamePlay();
  app.holdScore();
  app.resetGame();
};

app.init();
