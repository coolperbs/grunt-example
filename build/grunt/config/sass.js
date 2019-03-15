const sass = require('node-sass');
module.exports = function(grunt ,option){
    return {
        options: {
            implementation: sass,
            sourceMap: false
        },
        dev: {
            files:[
                {
                    expand: true,  
                    ext:'.css',
                    src:'src/**/*.scss',
                    dest:''
                }
            ]
        }
    }

}