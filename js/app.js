(function() {
'use strict';

angular.module('app', ['ngResource', 'ui.router', 'ngAnimate'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController as vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController as vm'
      })
      .state('work', {
        url: '/work',
        templateUrl: 'templates/work.html',
        controller: 'WorkController as vm'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact-form.html',
        controller: 'ContactController as vm'
      })
      .state('documented', {
        url: '/documented',
        templateUrl: 'templates/documented.html',
        controller: 'DocController as vm'
      })
  }]);

})();
