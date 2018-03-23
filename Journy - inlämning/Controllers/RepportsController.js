App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/Repports", {
                templateUrl: "Repports.html",
                controller: "RepportsController"
            });
    }
);

App.controller("RepportsController", function ($scope) {

});