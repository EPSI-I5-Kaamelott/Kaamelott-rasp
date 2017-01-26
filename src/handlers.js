const display = require('./helpers/display');
const player = require('./helpers/player');
const persist = require('./persist');

module.exports = {
  connection: () => {
    console.log('Connected to the server.');
    player.connect();
    display.connect();
  },

  start_quiz: () => {
    console.log('start_quizz');
    player.start();
    display.start();
  },

  end_quiz: ({ winner, score }) => {
    console.log('end_quiz');
    if(winner) {
      player.win();
      display.win(winner, score);
      persist.update_score(winner, score);
    } else {
      player.winless();
      display.winless();
    }
  }
};
