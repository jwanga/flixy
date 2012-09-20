'use strict'

Application.Directives
  .directive('listFilter', function(listService) {
  
    return {
    	restrict : 'E',
    	replace : true,
    	transclude : true,
    	scope : {},
    	controller : function($scope){
    		
			$scope.field = 'filter';
			$scope.get = function(){
				$scope.items = listService.getFilterData($scope.field);
			};
			
		},
    	templateUrl : 'list/listFilter-template.html',
    	link : function(scope, element, attrs) {
          	scope.field = attrs.field;
          	scope.get();
        },
    }
  });
  
  