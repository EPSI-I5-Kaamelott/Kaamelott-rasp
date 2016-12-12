const http = require('http');

const server = http.createServer();

const port = process.env.PORT || 3000;

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';

const handlers = require('./handlers');
require('./socket')(SERVER_URL, handlers);

server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
