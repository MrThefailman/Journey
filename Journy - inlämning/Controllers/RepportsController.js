App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/reports", {
                templateUrl: "Repports.html",
                controller: "RepportsController"
            });
    }
);

App.controller("RepportsController", function ($scope) {

});