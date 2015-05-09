'use strict';

angular.module('relations').controller('parentCtrl', ['$scope', '$log', 'locusRest', 'kitRest', 'piRest',
    function ($scope, $log, locusRest, kitRest, piRest) {

        function init() {
            $scope.records = [];
            $scope.newRecord = {};
            kitRest.query({}, function (response) {
                $scope.kits = response;
            });
            $scope.cpi = 0;
            $scope.rcp = 0;
        }

        function rejectIfSameLocusExistInTable() {
            _.each($scope.records, function (record) {
                if (record.locus === $scope.newRecord.locus) {
                    $scope.message = '基因座' + $scope.getLocusName($scope.newRecord.locus) + '已经存在';
                }
            });
        }

        function pushRecordToCsv(exportedRecords) {
            _.each($scope.records, function (record) {
                var exportedRecord = _.clone(record);
                _.each($scope.loci, function (locus) {
                    if (locus.locusId === exportedRecord.locus) {
                        exportedRecord.locus = locus.name;
                    }
                });
                exportedRecords.push(exportedRecord);
            });
        }

        init();

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
            rejectIfSameLocusExistInTable();
            if (_.isEmpty($scope.message)) {
                var piPromise = piRest.calculateOneParentPi($scope.newRecord).$promise;

                var cpiPromise = piPromise.then(
                    function (success) {
                        $scope.newRecord.pi = success.value;
                        $scope.records.push(_.clone($scope.newRecord));

                        var pis = [];
                        _.each($scope.records, function (record) {
                            pis.push(_.clone(record.pi));
                        });
                        return piRest.calculateCpi(pis).$promise;
                    }, function (failure) {
                        $scope.message = '无法计算此PI值';
                        $log.log(failure);
                    }
                );

                var rcpPromise = cpiPromise.then(
                    function (success) {
                        $scope.cpi = success.value;
                        return piRest.calculateRcp($scope.cpi).$promise;
                    }, function (failure) {
                        $scope.message = '无法计算此CPI值';
                        $log.log(failure);
                    }
                );

                rcpPromise.then(
                    function (success) {
                        $scope.rcp = success.value;
                    }, function (failure) {
                        $scope.message = '无法计算此RCP值';
                        $log.log(failure);
                    }
                );
            }
        };

        $scope.removeRecord = function (index) {
            $scope.records.splice(index, 1);
        };

        $scope.exportRecordsToCSV = function () {
            var exportedRecords = [];
            pushRecordToCsv(exportedRecords);
            exportedRecords.push({cpiName: 'cpi', cpi: $scope.cpi});
            exportedRecords.push({rcpName: 'rcp', rcp: $scope.rcp});
            return exportedRecords;
        };

    }]);