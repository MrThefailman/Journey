App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/Journey", {
                templateUrl: "Journey.html",
                controller: "JourneyController"
            });
        $routeProvider
            .when("/NewJourney", {
                templateUrl: "MakeJourney.html",
                controller: "JourneyController"
            });
    }
);

App.controller("JourneyController", function ($scope, $location) {
    $scope.newJourney = function () {
        $location.path("/NewJourney");
    };

    $scope.chooseVehicle = "Välj fordon";

    $(function () {
        $("#journeyDatePicker").datetimepicker({
            locale: "se"
        });
    });
});