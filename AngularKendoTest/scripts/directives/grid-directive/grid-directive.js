function GridDirective() {
    return {
        restrict: 'AEC',
        scope: {
            gridOptions: '=options'
        },
        templateUrl: 'scripts/directives/grid-directive/grid-directive.tpl.html',
        link: GridDirectiveLink
    }
}

function GridDirectiveLink(scope, element, attrs) {
    console.log(attrs);

    //scope.gridOptions = {
    //    dataSource: [
    //        { FirstName: 'f1', LastName: 'l1' },
    //        { FirstName: 'f2', LastName: 'l2' },
    //        { FirstName: 'f3', LastName: 'l3' },
    //    ],
    //    sortable: true,
    //    pageable: true,
    //    columns: [{
    //            field: "FirstName",
    //            title: "First Name",
    //            width: "120px"
    //        }, {
    //            field: "LastName",
    //            title: "Last Name",
    //            width: "120px"
    //        }]
    //};
}

app.directive('myGrid', GridDirective);