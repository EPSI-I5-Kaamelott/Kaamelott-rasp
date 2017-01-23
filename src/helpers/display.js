const spawn = require('child_process').spawn;

function write_to_screen(msg_first_line = '', msg_second_line = '') {
  spawn('python', [msg_first_line, msg_second_line]);
}

module.exports = {
  connect: () => {
    console.log('connect');
    write_to_screen('Connected');
  },

  start: () => {
    console.log('Quizz started');
    write_to_screen('Quizz', 'started');
  },

  win: (winner, score) => {
    console.log(`${winner} win with a score of ${score}`);
    write_to_screen('Winner', `${winner}: ${score}`);
  },

  winless: () => {
    console.log('The quizz is better than players');
  }
};
