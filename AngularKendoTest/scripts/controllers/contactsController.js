app.controller("ContactsController", function ($scope) {
    $scope.text = "jQueryUI all the way!";
    $scope.contacts = [
        {
            id: 1,
            name: "Contact1"
        },
        {
            id: 2,
            name: "Contact2"
        },
        {
            id: 3,
            name: "Contact3"
        },
        {
            id: 4,
            name: "Contact4"
        },
        {
            id: 5,
            name: "Contact5"
        }
    ];
    $scope.sortableOptions = {
        start: function(e, ui) {
            $scope.startPosition = ui.item.index() + 1;
        },
        stop: function(e, ui) {
            $scope.endPosition = ui.item.index() + 1;
        }
    };
});