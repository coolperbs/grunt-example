module.exports = function(grunt ,option){
    return {
        build:{
            js:['uglify:build'],// 压缩js
            css:['cssmin:build'],
            html:['htmlmin:build'],
        }
    }

}