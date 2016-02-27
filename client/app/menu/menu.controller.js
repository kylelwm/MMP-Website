'use strict';

angular.module('myMakanPlaceApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.menuList = [{
    	id: 1,
    	data: 'assets/mock/menu1.jpg'
    }, {
    	id: 2,
    	data: 'assets/mock/menu2.jpg'
    }, {
    	id: 3,
    	data: 'assets/mock/menu3.jpg'
    }, {
    	id: 4,
    	data: 'assets/mock/menu4.jpg'
    }]
  });
