'use strict';

angular.module('relations').controller('menuCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.setActive = function (path) {
        if ($location.path() === path) {
            return 'active';
        }
    };
}]);