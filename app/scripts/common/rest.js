angular.module('restApp', ['ngResource'])
    .factory('kitRest', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/relations-with-gradle/kits');
    }])
    .factory('locusRest', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/relations-with-gradle/locus?kit=:kit');
    }])
    .factory('piRest', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/relations-with-gradle/pi/:action', {}, {
            calculateParentsPi: {method: 'POST', params: { action: "parents" }, isArray: false },
            calculateOneParentPi: {method: 'POST', params: { action: "oneparent" }, isArray: false }
        });
    }]);