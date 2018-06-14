App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/SignUp", {
                templateUrl: "SignUp.html",
                controller: "SignUpController"
            });
    }
);

App.controller("SignUpController", function ($scope, $location, $http) {

    //Signup function

    $scope.registerAccount = function () {

        $scope.username;
        $scope.password;

        $http.post('/api/Account/Register', {
            Email: $scope.username,
            password: $scope.password,
            confirmPassword: $scope.passwordConfirm
        }).then(function (response) {
            console.log(JSON.stringify(response));
            $location.path('/');
        });
        
    };

});