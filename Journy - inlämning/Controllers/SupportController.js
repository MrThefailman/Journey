App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/support", {
                templateUrl: "Support.html",
                controller: "SupportController"
            });
    }
);

App.controller("SupportController", function ($scope) {

});