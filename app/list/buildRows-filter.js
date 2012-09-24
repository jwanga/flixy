'use strict'
/**
*	returns a recordset in rows of a specified size.
*/
Application.Filters.filter('buildRows', function() {
	return function(items, rowSize) {
		var rows;
		
		rows = _(items).groupBy(function(item){ 
			return Math.ceil((_(items).indexOf(item)) / rowSize); 
		});
		
		console.debug(items, rowSize, rows);
		
		return rows;
	}
});