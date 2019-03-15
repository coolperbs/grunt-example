module.exports = function(grunt,option){
    grunt.registerTask('build', [
        'clean:build',
        'copy:build',
        // 'copy:html',
        // 'copy:image',
        // 'copy:fixCss'
        // 'uglify:build',// 压缩js
        // 'cssmin:build',// 压缩css
        // 'htmlmin:build',
        'uglify:build',
        'cssmin:build',
        'htmlmin:build'
    ]);
}