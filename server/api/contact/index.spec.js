'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var contactCtrlStub = {
  index: 'contactCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var contactIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './contact.controller': contactCtrlStub
});

describe('Contact API Router:', function() {

  it('should return an express router instance', function() {
    contactIndex.should.equal(routerStub);
  });

  describe('GET /api/contacts', function() {

    it('should route to contact.controller.index', function() {
      routerStub.get
        .withArgs('/', 'contactCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
