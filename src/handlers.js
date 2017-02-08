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

  end_quiz: (result) => {
    console.log('end_quiz');
    if(result.user) {
      player.win();
      display.win(result.user, result.score);
      persist.update_score(result.user, result.score);
    } else {
      player.winless();
      display.winless();
    }
  }
};
