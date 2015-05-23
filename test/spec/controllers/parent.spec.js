'use strict';

describe('Controller: parentCtrl', function () {

    beforeEach(module('relations'));

    var parentCtrl, scope;
    var httpBackend;
    var kits = [
        {
            'kitId': 1,
            'name': 'AGCU211'
        },
        {
            'kitId': 2,
            'name': 'AGCU_EX22'
        }
    ];

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        parentCtrl = $controller('parentCtrl', {
            $scope: scope,
            kits: kits
        });
    }));

    it('should initialize information', function () {
        expect(scope.kits).toEqual(kits);
        expect(scope.cpi).toBe(0);
        expect(scope.rcp).toBe(0);
    });

    it('should return loci when query', function () {
        scope.kit = {kitId: 1};
        var expectedLoci = [
            {'locusId': 1, 'name': 'D1GATA113'}
        ];

        httpBackend.when('GET', 'http://localhost:8080/relations-api/kits/1/loci').respond(expectedLoci);
        scope.queryLoci();
        httpBackend.flush();

        expect(scope.loci[0].locusId).toEqual(expectedLoci[0].locusId);
        expect(scope.loci[0].name).toEqual(expectedLoci[0].name);
    });

    it('should return locus name when locus id match', function () {
        scope.loci = [
            {'locusId': 1, 'name': 'D1GATA113'}
        ];
        expect(scope.displayLocusName(1)).toBe('D1GATA113');
    });

    it('should remove records by index', function () {
        scope.records = [
            {id: 1},
            {id: 2},
            {id: 3}
        ];

        scope.removeRecord(0);

        expect(scope.records).toEqual([
            {id: 2},
            {id: 3}
        ]);
    });

});
