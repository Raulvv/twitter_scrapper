const request = require('supertest');

describe('UserController', function() {

  describe('#index()', function() {
    it('should send hello world', function (done) {
      request(sails.hooks.http.app)
        .get('/api/log/list')
        .expect('Hello World', done)
    });
  });

});
