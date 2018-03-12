App.config(
    function ($routeProvider) {

        $routeProvider
           .when("/", {
                templateUrl: "LogIn.html",
                controller: "LoginController"
           });
    }
);

App.controller("LoginController", function ($scope) {
    
});

