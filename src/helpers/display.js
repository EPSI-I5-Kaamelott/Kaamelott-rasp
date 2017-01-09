module.exports = {
  connect: () => {
    console.log('connect');
  },

  start: () => {
   console.log('Quizz started'); 
  },

  win: (winner, score) => {
    console.log(`${winner} win with a score of ${score}`);
  },

  winless: () => {
    console.log('The quizz is better than players');
  }
};
