'use strict';

var port = '8080';
var localhost = 'http://localhost:' + port;

angular.module('relations')
    .factory('kitRest', ['$resource', function ($resource) {
        return $resource(localhost + '/relations-api/kits');
    }])
    .factory('locusRest', ['$resource', function ($resource) {
        return $resource(localhost + '/relations-api/kits/:kitId/loci');
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
            }
        });
    }]);