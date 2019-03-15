module.exports = function(){
    return {
        build:{
            expand: true,
            src: ['src/**/*.{png,jpg,jpeg,gif,webp,svg,ico}','**/*.{html,htm,eot,ttf,woff}',],//转移css
            cwd: 'dist',
            dest: 'dist',
        }
    }
}