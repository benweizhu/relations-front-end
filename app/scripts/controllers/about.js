'use strict';

/**
 * @ngdoc function
 * @name relationsFrontEndApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the relationsFrontEndApp
 */
angular.module('relationsFrontEndApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
