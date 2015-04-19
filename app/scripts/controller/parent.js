'use strict';

angular.module('relations').controller('oneParentController', ['$scope', '$log', 'locusRest', 'kitRest', 'piRest',
    function ($scope, $log, locusRest, kitRest, piRest) {

        $scope.records = [];
        $scope.newRecord = {};
        kitRest.query({}, function (response) {
            $scope.kits = response;
        });
        $scope.cpi = 0;

        $scope.getLoci = function () {
            locusRest.query({kitId: $scope.kit.kitId}, function (success) {
                $scope.loci = success;
            });
        };

        $scope.getLocusName = function (locusId) {
            var locusName = '';
            _.each($scope.loci, function (locus) {
                if (locus.locusId === locusId) {
                    locusName = locus.name;
                }
            });
            return locusName;
        };

        $scope.addRecord = function () {
            $scope.message = '';
            _.each($scope.records, function (record) {
                if (record.locus === $scope.newRecord.locus) {
                    $scope.message = '基因座' + $scope.getLocusName($scope.newRecord.locus) + '已经存在';
                }
            });
            if (_.isEmpty($scope.message)) {
                piRest.calculateOneParentPi($scope.newRecord, function (success) {
                        $scope.newRecord.pi = success.value;
                        $scope.records.push(_.clone($scope.newRecord));

                        var pis = [];
                        _.each($scope.records, function (record) {
                            pis.push(_.clone(record.pi));
                        });
                        piRest.calculateCpi(pis, function (success) {
                            $scope.cpi = success.value;
                        });
                    }, function (failure) {
                        $scope.message = '无法计算此PI值';
                        $log.log(failure);
                    }
                );
            }
        };

        $scope.removeRecord = function (index) {
            $scope.records.splice(index, 1);
        };

        $scope.rcp = function () {
            if ($scope.cpi !== 0) {
                return 1;
            } else {
                return 0;
            }
        };

    }])
;