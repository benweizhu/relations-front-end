'use strict';

describe('Controller: parentsCtrl', function () {

    beforeEach(module('relations'));

    var parentsCtrl, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        parentsCtrl = $controller('parentsCtrl', {
            $scope: scope,
            kits: {}
        });
    }));

    it('should initialize information', function () {

    });
});
