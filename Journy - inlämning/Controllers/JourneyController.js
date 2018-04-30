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

App.controller("JourneyController", function ($scope, $location, $http) {

    $http.get('/api/Vehicles', {

    }).then(function (response) {

        console.log(JSON.stringify(response));
        var str = JSON.stringify(response);
        var VehicleObject = $.parseJSON('[' + str + ']');
        console.log(VehicleObject);

        $scope.Vehicles = response.data;

    });

    $scope.newJourney = function () {
        $location.path("/NewJourney");
    };

    $scope.journeyToMain = function () {
        $location.path("/Main");
    };

    $scope.makeJourneyToJourney = function () {
        $http.post('/api/Journey', {

            ChosenVehicle: $scope.chosenVehicle,
            Date: $scope.date,
            MilageStart: $scope.milageStart,
            MilageEnd: $scope.milageEnd,
            DistanceTraveled: $scope.distanceTraveled,
            StartingAdress: $scope.startAdress,
            ArrivalAdress: $scope.endAdress,
            Matter: $scope.matter,
            Notes: $scope.notes


        }).then(function (response) {

            console.log(JSON.stringify(response));
            //$location.path("/Journey");
        });
    };

    $scope.saveMakeJourney = function () {

        $location.path("/Journey");
    };

    $scope.chosenVehicle = "Välj fordon";

    $scope.chooseVehicle = function (i) {

        var target = "#listVehicle" + i;

        console.log(target);

        $scope.chosenVehicle = i;
        

    };

    

    
    

    $scope.findMe = function () {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, error);
        }
        else {
            console.log("No support for geolocation");
        }

        function error(error) {
            console.log(error);
        }

        function showPosition(position) {
            console.log(position);

            var geocoder = new google.maps.Geocoder;

            var coords = position.coords;

            var latLong = { lat: parseFloat(coords.latitude), lng: parseFloat(coords.longitude) };

            geocoder.geocode({ "location": latLong }, function (results, status) {

                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var formattedAddress = results[0].formatted_address;
                        $scope.startAdress = formattedAddress;
                        $scope.$apply();
                    }
                    else {
                        console.log("No match");
                    }
                }
                else {
                    console.log("Error accured");
                }
            });

        }
        
    };

    $scope.findMeEnd = function () {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, error);
        }
        else {
            console.log("No support for geolocation");
        }

        function error(error) {
            console.log(error);
        }

        function showPosition(position) {
            console.log(position);

            var geocoder = new google.maps.Geocoder;

            var coords = position.coords;

            var latLong = { lat: parseFloat(coords.latitude), lng: parseFloat(coords.longitude) };

            geocoder.geocode({ "location": latLong }, function (results, status) {

                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var formattedAddress = results[0].formatted_address;
                        $scope.endAdress = formattedAddress;
                        $scope.$apply();
                    }
                    else {
                        console.log("No match");
                    }
                }
                else {
                    console.log("Error accured");
                }
            });

        }

    };
    
});
