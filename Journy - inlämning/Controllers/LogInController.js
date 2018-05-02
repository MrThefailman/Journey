App.config(
    function ($routeProvider) {

        $routeProvider
           .when("/", {
                templateUrl: "LogIn.html",
                controller: "LoginController"
           });
    }
);

App.controller("LoginController", ["$scope", "$location", function ($scope, $location) {
    $scope.tryLogin = function () {
        if ($scope.username.includes("@support")) {
            $location.path("/AdminSupport");
        }
        else {
            $location.path("/Main");
        }
        
    };

    $scope.signUp = function () {
        
            $location.path("/SignUp");
        
    };

    
}]);

