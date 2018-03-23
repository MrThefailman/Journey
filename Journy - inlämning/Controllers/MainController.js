var App = angular.module("JourneyData", ["ngRoute"]);

App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/Main", {
                templateUrl: "Main.html",
                controller: "MainController"
            });
    }
);

App.controller("MainController", function ($scope, $location) {
    
    $scope.viewJourneys = function () {
        $location.path("/Journey");
    };

    $scope.viewVehicles = function () {
        $location.path("/Vehicles");
    };

    $scope.viewRepports = function () {
        $location.path("/Repports");
    };

    $scope.viewSupport = function () {
        $location.path("/Support");
    };

    $scope.journeyUpdateTime = "2018-03-12";
    $scope.vehiclesUpdateTime = "2017-32-43";
    $scope.repportsUpdateTime = "3213-21-4";

    

});