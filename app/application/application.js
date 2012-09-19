'use strict';

//declare namespaces
var Application = Application || {};
Application.Controllers = Application.Controllers || {};

Application.Filters = angular.module('application.filters', []);
Application.Services = angular.module('application.services', ['ngResource']);
Application.Directives = angular.module('application.directives', []);

// Declare app level module which depends on filters, and services
angular.module('application', ['application.filters', 'application.services', 'application.directives']).
  config(['$routeProvider', function($routeProvider) {
  
    $routeProvider.when('/', {templateUrl: 'list/list-partial.html', controller: Application.Controllers.ListController});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
