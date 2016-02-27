'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }


  slides = [{
  		text: 'Macdonald Angus Burger',
	  	type: 'image',
	  	data: 'assets/mock/slide1.jpg',
	  	id: 1
	  },{
	  	text: 'Macdonald Beef Burger',
	  	type: 'image',
	  	data: 'assets/mock/slide2.png',
	  	id: 2
	  },{
	  	text: 'Macdonald Supreme Burger',
	  	type: 'image',
	  	data: 'assets/mock/slide3.jpg',
	  	id: 3
	  },{
	  	text: 'Macdonald Fish Burger',
	  	type: 'image',
	  	data: 'assets/mock/slide4.jpg',
	  	id: 3
	  }];
}

angular.module('myMakanPlaceApp')
  .controller('MainController', MainController);

})();
