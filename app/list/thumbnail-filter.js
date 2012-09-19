Application.Filters.filter('applyPath', function() {
	return function(input) {
		var output;
		
		output = 'http://placehold.it/300x450';
		
		if(input && input !== '' ){
			output = 'content/' + input;
		}
		
		return output;
	}
});