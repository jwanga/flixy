'use strict'

Application.Filters.filter('calculateSpan', function() {
    return function(input) {
        var output, size;

        size = Math.ceil(12/input);

        if(size < 12 && size > 6){
            output
        }
        output = size < 2 ? 2 : size;

        return output;
    }
});