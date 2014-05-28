'use strict';

angular.module('estate-mocks', ['ngMockE2E'])
.run(function ($httpBackend) {
    //var baseApiUrl = 'http://localhost/api/';

    var estates = [{
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
        }];
    
    //first the routes that we want to mock
    $httpBackend.whenGET('/estates')
        .respond(estates);

    // the routes that you don't want to mock
    $httpBackend.whenGET(/\.html$/).passThrough();
    //$httpBackend.whenPOST(/^\w+.*/).passThrough();
});