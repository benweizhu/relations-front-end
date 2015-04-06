'use strict';

angular
    .module('relationsFrontEndApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/one-parent', {
                templateUrl: 'views/one-parent.html'
            })
            .when('/parents', {
                templateUrl: 'views/parents.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
