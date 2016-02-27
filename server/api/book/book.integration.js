'use strict';

var app = require('../..');
import request from 'supertest';

describe('Book API:', function() {

  describe('GET /api/books', function() {
    var books;

    beforeEach(function(done) {
      request(app)
        .get('/api/books')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          books = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      books.should.be.instanceOf(Array);
    });

  });

});
