'use strict'

Application.Filters.filter('calculateSpan', function() {
	return function(input) {
		var output, size;
		
		size = Math.ceil(12/input);
		
<<<<<<< HEAD
		if(size < 12 && size > 6){
		  output
		}
=======
		/*
		if(size < 12 && size >=6){
			output = 6;
		}else if(size < 6 && size >=4){
			output = 4;
		}else if(size < 4 ){
			output = 2;
		}*/
		
>>>>>>> apn calculation chages
		output = size < 2 ? 2 : size;
		
		return output;
	}
});