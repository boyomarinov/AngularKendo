// for testing out the EstatesController
describe('EstatesController', ["$httpBackend", "$rootScope", "$controller", function ($httpBackend, $rootScope, $controller) {
    var $httpBackend, $rootScope, createController;

    beforeEach(inject(function ($injector) {
        createController = function () {
            return $controller('EstatesController', { '$scope': $rootScope });
        };
    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should return data instead of partial', function () {
        $httpBackend.expectGET('/estates').respond(200, [{
            id: 10,
            name: 'objekt 1'
        },
        {
            id: 11,
            name: 'objekt 2'
        },
        {
            id: 12,
            name: 'objekt 3'
        }]);
        var controller = createController();
        $httpBackend.flush();
    });
}]);