'use strict';

describe('Controller: parentCtrl', function () {

    beforeEach(module('relations'));

    var parentCtrl, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        parentCtrl = $controller('parentCtrl', {
            $scope: scope,
            kits: {}
        });
    }));

    it('should initialize information', function () {

    });
});
