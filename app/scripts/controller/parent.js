'use strict';

angular.module('relations').controller('oneParentController', ['$scope', 'locusRest', 'kitRest', 'piRest',
    function ($scope, locusRest, kitRest, piRest) {

        $scope.records = [];
        $scope.newRecord = {};

        kitRest.query({}, function (response) {
            $scope.kits = response;
        });

        $scope.getLoci = function () {
            locusRest.query({kitId: $scope.kit.kitId}, function (response) {
                $scope.loci = response;
            });
        };

        $scope.remove = function (index) {
            $scope.records.splice(index, 1);
        };

        $scope.addRecord = function () {
            piRest.calculateOneParentPi($scope.newRecord, function (response) {
                    $scope.newRecord.pi = response.value;
                    $scope.records.push($scope.newRecord);
                }
            );
        };

    }])
;