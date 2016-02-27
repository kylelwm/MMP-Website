'use strict';

angular.module('myMakanPlaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/book',
        templateUrl: 'app/book/book.html',
        controller: 'BookCtrl'
      });
  });
