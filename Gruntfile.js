module.exports = function (grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        clean: ["dist","tmp"],

        copy: {
            compressed: {
                files: [
                    {
                        expand: true,
                        cwd: 'tmp/',
                        src: ['html/**/*.*'],
                        dest: 'dist',
                        rename: function(dest, src) {
                            return dest +"/"+ src+".gz";
                        }
                    }
                ]
            },
            lua: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['lua/**/*.*'],
                        dest: 'dist'
                    }
                ]
            }

        },
        compress: {
            nodeMCU: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: 'src/',
                src: ['html/**/*'],
                dest: 'tmp/'
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Task definition
    grunt.registerTask('default', [
        'clean',
        'compress:nodeMCU',
        'copy:compressed', "copy:lua"
    ]);
};

