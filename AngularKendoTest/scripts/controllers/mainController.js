app.controller("MainController", function ($scope) {
    $scope.showEstates = false;
    $scope.showContacts = false;
    $scope.menuOrientation = "vertical";
    $scope.text = "Main controller is working!";
    $scope.color1 = "";
    $scope.test = 'bugfix6 test';
    $scope.master = 'master test';
    $scope.gOptions = {
        dataSource: [
            { FirstName: 'f1', LastName: 'l1' },
            { FirstName: 'f2', LastName: 'l2' }
        ],
        sortable: true,
        pageable: true,
        columns: [{
            field: "FirstName",
            title: "First Name",
            width: "120px"
        }, {
            field: "LastName",
            title: "Last Name",
            width: "120px"
        }]
    };
}); 