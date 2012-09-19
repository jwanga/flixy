'use strict'

Application.Controllers.ListController = function($scope, $rootScope, $routeParams, listService){

	$scope.videos = listService.get();
	$rootScope.$on('query', function(event, args){
		
		$scope.query = args.query;
		
	});
	
	
}