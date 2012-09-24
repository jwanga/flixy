'use strict';

//declare namespaces
var Application = Application || {};
Application.Controllers = Application.Controllers || {};

Application.Filters = angular.module('application.filters', []);
Application.Services = angular.module('application.services', ['ngResource']);
Application.Directives = angular.module('application.directives', []);

// Declare app level module which depends on filters, and services
angular.module('application', ['application.filters', 'application.services', 'application.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    function getParameterByName (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null) {
            return "";
        }
        else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }

    var isPushState = getParameterByName("pushState");
    console.log("Pushstate is: " + isPushState);
    if (isPushState === undefined || isPushState === null || isPushState === "") {
        isPushState = true;
    }

    var routeConfig = {};
    if (isPushState == true) {
        console.log("Acting like push state should be active");
        routeConfig = {
            html5PushState: true, // dev: false, prod: true
            historyPrefix: ""
        };
    }
    else {
        console.log("Acting like push state should not be active");
        routeConfig = {
            html5PushState: false, // dev: false, prod: true
            historyPrefix: "#"
        };
    }

    $locationProvider.html5Mode(routeConfig.html5PushState);
  
    $routeProvider.when('/', {templateUrl: 'list/list-partial.html', controller: Application.Controllers.ListController});
    $routeProvider.when('/:query', {templateUrl: 'list/list-partial.html', controller: Application.Controllers.ListController});
    $routeProvider.otherwise({templateUrl: 'errors/404-partial.html'});
  }]).
  run(['$location','$rootScope', function($location, $scope) {

    $scope.isPushState = $location.search().pushState;

    $scope.routeConfig = {};

    console.log("app.run() pushState=" + $scope.isPushState);

    if ($scope.isPushState === undefined || $scope.isPushState === null ||
        $scope.isPushState === "") {
        $scope.isPushState = true;
    }

    if ($scope.isPushState == true) {
        console.log("Acting like push state should be active");
        $scope.routeConfig = {
            html5PushState: true, // dev: false, prod: true
            historyPrefix: ""
        };
    }
    else {
        console.log("Acting like push state should not be active");
        $scope.routeConfig = {
            html5PushState: false, // dev: false, prod: true
            historyPrefix: "#"
        };
    }

}]);
