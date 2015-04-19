'use strict';

angular.module('relations').controller('mainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.setActive = function (path) {
        if ($location.path() === path) {
            return 'active';
        }
    };
}]);