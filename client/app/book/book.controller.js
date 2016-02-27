'use strict';

angular.module('myMakanPlaceApp')
  .controller('BookCtrl', function ($scope, api) {

  	$scope.minDate = new Date();
    
  	$scope.bookingForm = {};

  	console.log($scope.bookingForm);

		$scope.makeBooking = function() {
			console.log($scope.bookingForm.data);
			if(verifyBookingForm($scope.bookingForm.data)) {

				$scope.bookingForm.data.timestamp = new Date();				

				api.postBooking($scope.bookingForm.data);
			} else {
				console.log('Error with data');
			}
		}

		function verifyBookingForm(data) {
			if(!data.date) {
				console.log('Date');
				return false;
			} else if(!data.email) {
				console.log('Email');
				return false;
			} else if(!data.name) {
				console.log('Name');
				return false;
			} else if(!data.number) {
				console.log('Number');
				return false;
			} else if(!data.pax) {
				console.log('Pax');
				return false;
			} else if(!data.time) {
				console.log('Time');
				return false;
			} else {
				return true;
			}
		}
  });
