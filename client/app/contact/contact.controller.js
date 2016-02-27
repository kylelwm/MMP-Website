'use strict';

angular.module('myMakanPlaceApp')
  .controller('ContactCtrl', function ($scope, api) {

  	$scope.sendMessage = function() {

  		if(!$scope.contactForm.data) {
  			console.log('Error with data');
  			return;
  		}

  		if(verifyContactForm($scope.contactForm.data)) {

  			console.log($scope.contactForm.data);

				$scope.contactForm.data.timestamp = new Date();				

				api.sendMessage($scope.contactForm.data);
			} else {
				console.log('Error with data');
			}
  	}

		function verifyContactForm(data) {
			if(!data.name) {
				console.log('Name');
				return false;
			} else if(!data.number) {
				console.log('Number');
				return false;
			} else if(!data.email) {
				console.log('Number');
				return false;
			}  else if(!data.message) {
				console.log('Message');
				return false;
			} else {
				return true;
			}
		}

  });
