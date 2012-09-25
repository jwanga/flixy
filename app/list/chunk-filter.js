'use strict'
/**
*	returns a recordset in rows of a specified size.
*/
Application.Filters.filter('chunk', function() {
	return function(array, chunkSize) {
	
        if (!(array instanceof Array)) return array;
        if (!chunkSize) return array;
        var result = [];
        var currentChunk = [], chunkHash = '';
        for (var i = 0; i < array.length; i++) {
            chunkHash = chunkHash + array[i];
            currentChunk.push(array[i]);
            if (currentChunk.length == chunkSize) {
                currentChunk.$$hashKey = chunkHash;
                result.push(currentChunk);
                currentChunk = [];
                chunkHash = '';
            }
        }
        if (currentChunk.length > 0) {
            currentChunk.$$hashKey = chunkHash;
            result.push(currentChunk);
        }
        return result;
    }
});