module.exports = function(grunt,option){
    return {
        options: {
            sourceMap: false,
            presets: ['@babel/preset-env']
        },
        dev: {
            // files: {
            //     'dist/**/*.js': 'src/**/*.es6'
            // }
            // options:false,
            files:[
                {
                    expand: true,  
                    ext:'.js',
                    src:'src/**/*.es6',
                    dest:''
                }
            ]
        }
    }

}