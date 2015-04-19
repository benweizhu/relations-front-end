'use strict';

var port = '8080';
var localhost = 'http://localhost:' + port;

angular.module('relations')
    .factory('kitRest', ['$resource', function ($resource) {
        return $resource(localhost + '/relations-api/kits', null, {'query': {method: 'GET', isArray: true}});
    }])
    .factory('locusRest', ['$resource', function ($resource) {
        return $resource(localhost + '/relations-api/kits/:kitId/loci', {kitId: '@id'}, {'query': {method: 'GET', isArray: true}});
    }])
    .factory('piRest', ['$resource', function ($resource) {
        return $resource(localhost + '/relations-api/pi/:action', {}, {
            calculateParentsPi: {
                method: 'POST',
                params: { action: 'parents' },
                isArray: false
            },
            calculateOneParentPi: {
                method: 'POST',
                params: { action: 'oneparent' },
                isArray: false
            },
            calculateRcp: {
                method: 'POST',
                params: { action: 'rcp' },
                isArray: false
            },
            calculateCpi: {
                method: 'POST',
                params: { action: 'cpi' },
                isArray: false
            }
        });
    }]);