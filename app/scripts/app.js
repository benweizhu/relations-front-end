'use strict';

angular.module('relations', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
            .when('/parent', {
                templateUrl: 'views/parent.html',
                controller: 'parentCtrl'
            })
            .when('/parents', {
                templateUrl: 'views/parents.html',
                controller: 'parentsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });