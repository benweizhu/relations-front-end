'use strict';

describe('Service: restService', function () {

    var kitRest, $httpMock;

    // load the controller's module
    beforeEach(module('relations'));

    beforeEach(inject(function (_kitRest_, $httpBackend) {
        kitRest = _kitRest_;
        $httpMock = $httpBackend;
    }));

    it('should return all the kits', function () {
        expect(kitRest).not.toBe(null);
    });
});
