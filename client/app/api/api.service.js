'use strict';

angular.module('myMakanPlaceApp')
  .service('api', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var api = {};

    var bookingUrl = '/api/books';

    var contactUrl = '/api/contacts';

	  var bookingResource = $resource(bookingUrl, {}, {
	    post: {
	      method: 'POST'
	    }
	  });

	  var contactResource = $resource(contactUrl, {}, {
	    post: {
	      method: 'POST'
	    }
	  });

    api.postBooking = function(data) {
	    return bookingResource.post(data);
	  };

	  api.sendMessage = function(data) {
	  	return contactResource.post(data);
	  };

  	return api;

  });
