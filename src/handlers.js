const display = require('./helpers/display');
const player = require('./helpers/player');

module.exports = {
  connection: () => {
    console.log('Connected to the server.');
    player.connect();
    display.connect();
  },

  start_quiz: () => {
    player.start();
    display.start();
  },

  end_quiz: ({ winner, score }) => {
    if(winner) {
      player.win();
      display.win(winner, score);
    } else {
      player.winless();
      display.winless();
    }
  }
};
