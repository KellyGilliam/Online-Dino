const request = require('supertest')('http://localhost:3000');
require('./../server/server');

describe('Your server', () => {
  it('should respond to GET request for \'/\' with 200', (done) => {
    request
      .get('/')
      .expect(200, done);
  });

  it('should respond to GET request for \'/\' with text/html', (done) => {
    request
      .get('/')
      .set('Accept','text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('should respond to GET requests for \'/wrong.html\' with 404', (done) => {
    request
      .get('/wrong.html')
      .expect(404, done)
  });

  it('should respond to POST requests for \'/button\' with 200', (done) => {
    request
      .post('/button')
      .set('Accept','text/html')
      .expect(200, done)
  });

  it('should respond to POST requests for \'/button\' with "hello"', (done) => {
    request
      .post('/button')
      .set('Accept','text/html')
      .expect('hello', done)
  });

  it('should respond to POST requests for \'/nothing\' with 404', (done) => {
    request
      .post('/nothing')
      .set('Accept','text/html')
      .expect(404,done);
  });

  xit('should respond to GET requests for \'/style.css\' with 200', (done) => {
    request
      .get('/style.css')
      .expect(200, done);
  });

  xit('should respond to GET requests for \'/style.css\' with text/css', (done) => {
    request
      .get('/style.css')
      .set('Accept', 'text/css')
      .expect('Content-Type', /css/)
      .expect(200, done);
  });

});
