var app = angular.module("kendoApp", ["kendo.directives", "ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "MainController"
        })
        .when("/estates", {
            templateUrl: "partials/estates.html",
            controller: "EstatesController"
        })
        .when("/estates/new", {
            templateUrl: "partials/estates-new.html",
            controller: "EstatesNewController"
        })
        .when("/contacts", {
            templateUrl: "partials/contacts.html",
            controller: "ContactsController"
        })
        
});



//// if state provider is used
//.config(["$stateProvider", function($stateProvider) {
    //    var home = {
    //        name: "home",
    //        url: "/",
    //        parent: home,
    //        templateUrl: "home.html"
    //    },
    //    estates = {
    //        name: "estates",
    //        url: "/estates",
    //        parent: home,
    //        templateUrl: "estates.html"
    //    },
    //    estates = {
    //        name: "contacts",
    //        url: "/contacts",
    //        parent: home,
    //        templateUrl: "contacts.html"
    //    }
    //}]).run(["$state", function($state) {
    //    $state.transitionTo("home");
    //}]);