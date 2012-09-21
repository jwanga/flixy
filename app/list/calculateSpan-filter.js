'use strict'

Application.Filters.filter('calculateSpan', function() {
	return function(input) {
		var output, size;
		
		size = Math.ceil(12/input);
		output = size < 2 ? 2 : size;
		
		return output;
	}
});