module.exports = function(grunt,option){
    return {
        options: {
            process: function (content, srcpath) {
                console.log(content);
                return content.replace(/[sad ]/g, '_');
            }
        },
        build:{
            files: [{
                expand: true,
                cwd: 'src',
                src: '**/*.css',
                dest: 'dist'
            }]
        }
    }

}