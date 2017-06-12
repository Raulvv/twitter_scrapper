const request  = require('supertest');
const scrapper = require('../../api/services/TwitterScrapperService.service')

describe('TwitterScrapperService', function() {

  describe('#scrapUser()', function() {
    it('should send hello world', function (done) {
      scrapper.scrapUser('RaulvvH')
    });
  });

});
