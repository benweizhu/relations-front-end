'use strict';

describe('Controller: MainCtrl', function () {

    beforeEach(module('relations'));

    var MainCtrl, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {

    });
});
