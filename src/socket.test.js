const http = require('http');
const server = http.createServer();
const io = require('socket.io');
const { spy } = require('sinon');
const { expect } = require('chai');

const client = require('./socket');

const TEST_URL = 'http://localhost:3001';


describe('test socket', () => {

  let sock;

  beforeEach( (done) => {
    sock = io(server);
    server.listen(3001, () => done());
  });

  afterEach((done) => {
    server.close( () => done());
    sock.close();
  });

  it('should connect', (done) => {
    sock.on('connection', () => {
      done();
    });
    client(TEST_URL, {});
  });
});
