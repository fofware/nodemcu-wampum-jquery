module.exports = function (grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        clean: ["dist","tmp"],

        // Task configuration
        concat: {
            options: {
                separator: grunt.util.linefeed + ';' + grunt.util.linefeed,
                failOnMissing: true
            },
            libs: {
                nonull: true,
                src: [
                    './bower_components/jquery/dist/jquery.min.js',
                    './bower_components/iCheck/icheck.min.js'
                ],
                dest: './src/html/assets/javascript/dependencies.js'
            }
        },

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
            },
            css: {
                files: [
                    {
                        expand: true,
                        cwd: './bower_components/iCheck/skins',
                        src: ['polaris/**/*.*'],
                        dest: 'src/html/assets/css'
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
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definition
    grunt.registerTask('default', [
        'clean',
        'concat',
        'copy:css',
        'compress:nodeMCU',
        'copy:compressed', "copy:lua"
    ]);
};

