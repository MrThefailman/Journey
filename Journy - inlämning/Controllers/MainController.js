var App = angular.module("JourneyData", ["ngRoute"]);

App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/mainMenu", {
                templateUrl: "Main.html",
                controller: "MainController"
            });
    }
);

App.controller("MainController", function ($scope) {

});