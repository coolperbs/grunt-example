module.exports = function(grunt,option){
    return {
        options: {
            mangle: {
                except: ['require']
            },
            compress: {
                drop_console: true //删除全部console信息
            }
        },
        build: {
            files: [{
                expand: true,
                cwd: 'src',
                src: '**/*.js',
                dest: 'dist'
            }]
        }
    }

}