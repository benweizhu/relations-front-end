'use strict';

angular.module('relations', ['ngResource', 'ngRoute', 'ngSanitize', 'ngCsv'])
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
                controller: 'parentCtrl',
                resolve: {
                    kits: function (kitRest) {
                        return kitRest.query().$promise;
                    }
                }
            })
            .when('/parents', {
                templateUrl: 'views/parents.html',
                controller: 'parentsCtrl',
                resolve: {
                    kits: function (kitRest) {
                        return kitRest.query().$promise;
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    });