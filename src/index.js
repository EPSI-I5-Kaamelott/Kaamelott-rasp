const http = require('http');
const server = http.createServer();

const port = process.env.PORT || 3000;

const SERVER_URL = 'https://peaceful-temple-52219.herokuapp.com';

const handlers = require('./handlers');
require('./socket')(SERVER_URL, handlers);

server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
  handlers.connection();
});
