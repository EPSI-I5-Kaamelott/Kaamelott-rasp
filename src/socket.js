const socket_io = require('socket.io-client');

const actions = {
  CONNECTION: 'connection',
  START_QUIZ: 'start_quiz',
  END_QUIZ: 'end_quiz'
};

module.exports = (SERVER_URL, handlers) => {
  const socket = socket_io.connect(SERVER_URL);
  socket.on('*', () => console.log('receiving...'));

  socket.on(actions.CONNECTION, handlers.connection);
  socket.on(actions.START_QUIZ, handlers.start_quiz);
  socket.on(actions.END_QUIZ, handlers.end_quiz);

  return { socket, actions };
};
