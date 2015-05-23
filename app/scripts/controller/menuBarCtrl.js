'use strict';

angular.module('relations').controller('menuBarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.setActive = function (path) {
        if ($location.path() === path) {
            return 'active';
        }
    };
}]);