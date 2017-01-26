const socket_io = require('socket.io-client');

const actions = {
  CONNECTION: 'connection',
  START_QUIZ: 'start_quiz',
  END_QUIZ: 'end_quiz'
};

module.exports = (SERVER_URL, handlers) => {
  const socket = socket_io.connect(SERVER_URL);
  socket.on('*', () => console.log('receiving...'));
  for(let action in actions) {
    socket.on(action, handlers[action]);
  }

  return { socket, actions };
};
