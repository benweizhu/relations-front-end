angular.module('oneParentApp', ['restApp','ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/one-parent', {
            templateUrl: 'pages/one_parent/one-parent.html'
        });
    }])
    .controller('oneParentController', ['$scope', 'locusRest', 'kitRest', 'piRest',
        function ($scope, locusRest, kitRest, piRest) {

            $scope.locuses = [];

            kitRest.get({}, function (data) {
                $scope.kits = data.kits;
            });

            $scope.selectKit = function () {
                locusRest.get({kit: $scope.kit}, function (data) {
                    $scope.locusCodes = data.codes;
                });
            };

            $scope.remove = function(index){
                $scope.locuses.splice(index, 1);
            };

            $scope.add = function () {

                var req = {kit: $scope.kit, locus: $scope.code, af1: $scope.af1, af2: $scope.af2,
                    c1: $scope.c1, c2: $scope.c2};

                piRest.calculateOneParentPi(req, function (resp) {
                    $scope.locuses.push({code: $scope.code, af1: $scope.af1, af2: $scope.af2,
                        c1: $scope.c1, c2: $scope.c2, pi: resp.value});
                });

            };

        }]);