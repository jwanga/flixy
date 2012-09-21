'use strict'

Application.Controllers.SearchController = function($scope, $rootScope, $routeParams, $location){

	$scope.$watch('query', function(newValue, oldValue){
		//$rootScope.$broadcast('query', {query : newValue});
		if(newValue){
			$location.path('/' + newValue);
		}
	});
	
	$scope.$on('query', function(event, args){
		
		$scope.query = args;
		
	});
	
}