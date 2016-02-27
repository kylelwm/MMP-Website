'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Menu',
    'state': 'menu'
  }, {
    'title': 'Book',
    'state': 'book'
  }, {
    'title': 'About',
    'state': 'about'
  }, {
    'title': 'Contact',
    'state': 'contact'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
  }
}

angular.module('myMakanPlaceApp')
  .controller('NavbarController', NavbarController);
