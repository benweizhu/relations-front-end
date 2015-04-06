'use strict';

describe('Service: restService', function () {

    var kitRest;
    var $httpMock;

    // load the controller's module
    beforeEach(module('restService'));

    beforeEach(inject(function (_kitRest_, $httpBackend) {
        kitRest = _kitRest_;
        $httpMock = $httpBackend;
    }));

    it('should return all the kits', function () {
        expect(kitRest).not.toBe(null);
    });
});
