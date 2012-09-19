'use strict'

Application.Services.factory('listService', function($resource) {
	
	var resource;
	
	resource = $resource('content/:content.json',{content : '2'});
	
	return {
		get : function(){
			return resource.query({content : 'videos'});
		},
		
	}
});