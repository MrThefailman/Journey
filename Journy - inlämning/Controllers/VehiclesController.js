App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/vehicles", {
                templateUrl: "Vehicles.html",
                controller: "VehiclesController"
            });
    }
);

App.controller("VehiclesController", function ($scope) {

});