'use strict';

describe('Controller: mainCtrl', function () {

    beforeEach(module('relations'));

    var MainCtrl, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('should return "active" when location is correct', function () {

    });
});
