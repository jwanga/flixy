'use strict'

Application.Services.factory('listService', function($resource) {
	
	var resource, videos;
	
	resource = $resource('content/:content.json',{content : '2'});
	
	
	return {
		getFilterData : function(field){
			var filterData;
			
			switch(field){
				case 'genre' :
				    var genres;
				    
					genres = _(videos).map(function(video){
						return video.genres;
					});
					
					filterData = [];
					
					_(genres).each(function(value){
						filterData = filterData.concat(value.split(','));
					});
					
					break;
					
				case 'rating' :
					filterData = _(videos).map(function(video){
						return video.rating;
					});
					break;

			}
			
			return _(filterData).uniq();
		},
		
		get : function(){
			videos = resource.query({content : 'videos'});
			return videos
		},
		
		
	}
});