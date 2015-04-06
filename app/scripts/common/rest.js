'use strict';

angular.module('restApp', ['ngResource'])
    .factory('kitRest', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/relations-api/kits');
    }])
    .factory('locusRest', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/relations-api/kits/:kitId/loci');
    }])
    .factory('piRest', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/relations-api/pi/:action', {}, {
            calculateParentsPi: {method: 'POST', params: { action: 'parents' }, isArray: false },
            calculateOneParentPi: {method: 'POST', params: { action: 'oneparent' }, isArray: false }
        });
    }]);