App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/Journey", {
                templateUrl: "Journey.html",
                controller: "JourneyController"
            });
    }
);

App.controller("JourneyController", function ($scope) {

});