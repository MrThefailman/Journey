App.config(
    function ($routeProvider) {

        $routeProvider
           .when("/", {
                templateUrl: "LogIn.html",
                controller: "LoginController"
           });
    }
);

App.controller("LoginController", ["$rootScope", "$scope", "$location", "$http", function ($rootScope, $scope, $location, $http) {

    $scope.token = "";

    $scope.tryLogin = function () {
        if ($scope.username.includes("@support")) {
            $location.path("/AdminSupport");
        }
        else {
            //get token
            var data = "grant_type=password&username=" + $scope.username + "&password=" + $scope.password;
            $http.post('/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {

                $rootScope.username = $scope.username;
                $rootScope.token = response.data.access_token;
                $location.path("/Main");

            }, function (err, status) {

                console.log(err);

            });

            //$http.post("/token", $.param( {

            //    username: "timmie.bark@hotmail.com",
            //    password: "123456",
            //    grant_type: "password"
            //}));

            //$location.path("/Main");
        }
        
    };

    $scope.signUp = function () {
        
            $location.path("/SignUp");
        
    };

    
}]);

