'use strict';

var app = angular.module('relationsFrontEndApp', [
    'ngResource',
    'ngRoute'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/parent', {
            templateUrl: 'views/parent.html'
        })
        .when('/parents', {
            templateUrl: 'views/parents.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
