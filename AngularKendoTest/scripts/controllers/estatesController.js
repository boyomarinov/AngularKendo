app.controller("EstatesController", ["$scope", "$http", function ($scope, $http) {
    $scope.text = "Estates controller is working!";
    $scope.estates = [];
    $scope.loadMockedEstates = function() {
        $http.get("/estates").success(function (data) {
            $scope.estates = data;
        });
    };
}]);