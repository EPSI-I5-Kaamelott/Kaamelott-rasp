const socket_io = require('socket.io-client');
const handlers = require('./handlers');

const actions = {
  CONNECT: 'connect',
  START_QUIZ: 'start_quiz',
  END_QUIZ: 'end_quiz'
};

module.exports = (SERVER_URL) => {
  const rasp_client = socket_io(SERVER_URL);
  for(let action in actions) {
    rasp_client.on(action, handlers[action]);
  }
};
