App.config(
    function ($routeProvider) {
        $routeProvider
            .when("/Support", {
                templateUrl: "Support.html",
                controller: "SupportController"
            })
            .when("/AdminSupport", {
                templateUrl: "AdminSupport.html",
                controller: "AdminSupportController"
            });
    }
);

App.controller("AdminSupportController", function ($scope) {

    $(function () {
        var chat = $.connection.supportHub;
        $.connection.hub.qs = { "username": "journey@support.com" };

        chat.client.broadcastMessage = function (name, message) {

            var encodedName = $("<div />").text(name).html();
            var encodedMessage = $("<div />").text(message).html();

            $("#discussion").append("<li><strong>" + encodedName + "</strong>:&nbsp;&nbsp;" + encodedMessage + "</li>");
        };

        $("#displayName").val("Support");

        $("#message").focus();

        $.connection.hub.start().done(function () {
            $("#sendMessage").click(function () {
                chat.server.send($("#displayName").val(), $("#message").val());

                $("#message").val("").focus();
            });
        });
    });

});

App.controller("SupportController", function ($scope) {
    $(function () {
        var chat = $.connection.supportHub;
        $.connection.hub.qs = { "username": "timmie.bark@hotmail.com" };

        chat.client.broadcastMessage = function (name, message) {

            var encodedName = $("<div />").text(name).html();
            var encodedMessage = $("<div />").text(message).html();

            $("#discussion").append("<li><strong>" + encodedName + "</strong>:&nbsp;&nbsp;" + encodedMessage + "</li>");
        };

        $("#displayName").val(prompt("Ditt namn:", ""));

        $("#message").focus();

        $.connection.hub.start().done(function () {
            $("#sendMessage").click(function () {
                chat.server.send($("#displayName").val(), $("#message").val());

                $("#message").val("").focus();
            });
        });
    });
});