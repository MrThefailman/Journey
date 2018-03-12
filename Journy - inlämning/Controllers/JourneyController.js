App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/journey", {
                templateUrl: "Journey.html",
                controller: "JorneyController"
            });
    }
);

App.controller("JourneyController", function ($scope) {

});