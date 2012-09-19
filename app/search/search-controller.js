'use strict'

Application.Controllers.SearchController = function($scope, $rootScope, $routeParams){

	$scope.$watch('query', function(oldValue, newValue){
		$rootScope.$broadcast('query', {query : oldValue});
	});
	
}