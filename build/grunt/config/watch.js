module.exports = function(){
    return {
        dev: {
            files: ['src/**/*.es6','src/**/*.scss'],
            tasks: ['newer:babel:dev','newer:sass:dev']
        },
        
    }
}