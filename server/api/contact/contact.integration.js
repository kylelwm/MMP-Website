'use strict';

var app = require('../..');
import request from 'supertest';

describe('Contact API:', function() {

  describe('GET /api/contacts', function() {
    var contacts;

    beforeEach(function(done) {
      request(app)
        .get('/api/contacts')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          contacts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      contacts.should.be.instanceOf(Array);
    });

  });

});
