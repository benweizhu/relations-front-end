'use strict';

angular.module('relations').controller('parentsCtrl', ['$scope', 'locusRest', 'kitRest', 'piRest',
    function ($scope, locusRest, kitRest, piRest) {

        $scope.records = [];

        kitRest.get({}, function (data) {
            $scope.kits = data.kits;
        });

        $scope.selectKit = function () {
            locusRest.get({kit: $scope.kit}, function (data) {
                $scope.locusCodes = data.codes;
            });
        };

        $scope.remove = function (index) {
            $scope.records.splice(index, 1);
        };

        $scope.add = function () {

            var req = {kit: $scope.kit, locus: $scope.code, af1: $scope.af1, af2: $scope.af2, m1: $scope.m1,
                m2: $scope.m2, c1: $scope.c1, c2: $scope.c2};

            piRest.calculateParentsPi(req, function (resp) {
                $scope.records.push({code: $scope.code, af1: $scope.af1, af2: $scope.af2, m1: $scope.m1,
                    m2: $scope.m2, c1: $scope.c1, c2: $scope.c2, pi: resp.value});
            });

        };

    }]);