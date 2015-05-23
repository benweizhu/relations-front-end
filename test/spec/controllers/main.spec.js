'use strict';

describe('Controller: mainCtrl', function () {

    beforeEach(module('relations'));

    var MainCtrl, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('mainCtrl', {
            $scope: scope,
            $location: {
                path: function () {
                    return 'path';
                }
            }
        });
    }));

    it('should return "active" when location is correct', function () {
        expect(scope.setActive('path')).toBe('active');
    });
});
