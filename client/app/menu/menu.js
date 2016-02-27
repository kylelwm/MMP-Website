'use strict';

angular.module('myMakanPlaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });
