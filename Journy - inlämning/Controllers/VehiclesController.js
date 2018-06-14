App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/Vehicles", {
                templateUrl: "Vehicles.html",
                controller: "VehiclesController"
            });
        $routeProvider
            .when("/NewVehicle", {
                templateUrl: "NewVehicle.html",
                controller: "VehiclesController"
            });
    }
);

App.controller("VehiclesController", function ($rootScope, $scope, $location, $http) {
    
    //Get
    $http.get('/api/Vehicles', { headers: { 'Authorization': 'Bearer ' + $rootScope.token }

    }).then(function (response) {

        console.log(JSON.stringify(response));
        var str = JSON.stringify(response);
        var VehicleObject = $.parseJSON('[' + str + ']');
        console.log(VehicleObject);

        $scope.Vehicles = response.data;

    });
    
    //Add new vehicle function
    $scope.addNewVehicle = function () {

        $scope.vehicleType;
        $scope.regNr;
        $scope.vehicleBrand;

        $http.post('/api/Vehicles', {

            VehicleType: $scope.vehicleType,
            VehicleRegNr: $scope.regNr,
            VehicleBrand: $scope.vehicleBrand

        }).then(function (response) {

            console.log(JSON.stringify(response));
            $location.path("/Vehicles");

        });
    };

    //Delete vehicle function

    $scope.removeVehicle = function (i) {

        //var target = '#listVehicle' + i;


        $http.delete('/api/Vehicles/' + i).then(function () {

            $http.get('/api/Vehicles').then(function (response) {

                $scope.Vehicles = response.data;
            });


        });
        
    };

    //Set standard vehicle

    //$scope.setStandard = function (i) {
    //    http.put('/api/Vehicles/' + i).then(function (response) {

    //    });
    //};
    

    //Buttons

    $scope.viewNewVehicle = function () {
        $location.path("/NewVehicle");
    };

    $scope.vehiclesToMain = function () {
        $location.path("/Main");
    };

    $scope.newVehiclesToVehicles = function () {
        $location.path("/Vehicles");
    };

});