'use strict'

Application.Controllers.ListController = function($scope, $rootScope, $routeParams, listService){
	
	$scope.videos = listService.get();
	
	
	$scope.query = $routeParams.query;
	
	
	$rootScope.$broadcast('query', $routeParams.query);
	
	
}