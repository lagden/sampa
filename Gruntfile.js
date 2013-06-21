'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Concat
        concat: {
            options: {
                separator: ';'
            },
            frameworks: {
                src: [
                    // jQuery
                    'bower_components/jquery/jquery.js'
                ],
                dest: 'js/dist/frameworks.js'
            },
            vendor: {
                src: [
                    // GreenSock
                    'bower_components/GreenSock-JS/src/uncompressed/plugins/ScrollToPlugin.js',
                    'bower_components/GreenSock-JS/src/uncompressed/TimelineMax.js',
                    'bower_components/GreenSock-JS/src/uncompressed/TweenMax.js',
                    'bower_components/GreenSock-JS/src/uncompressed/jquery.gsap.js',
                    // fancyBox
                    'bower_components/fancyBox/jquery.fancybox.js',
                    //Crossroads, Hasher e Signal
                    'bower_components/js-signals/dist/signals.js',
                    'bower_components/hasher/dist/js/hasher.js',
                    'bower_components/crossroads.js/dist/crossroads.js'

                ],
                dest: 'js/dist/vendor.js'
            },
            app: {
                src: [
                    'js/main.js'
                ],
                dest: 'js/dist/base.js'
            },
            dev: {
                options: {
                    separator: ';'
                },
                src: [
                    'js/dist/frameworks.js',
                    'js/dist/vendor.js',
                    'js/dist/base.js'],
                dest: 'js/output.js'
            }
        },
        // Uglify
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
                properties: true,
                compress: {
                    global_defs: {
                        "DEBUG": false
                    },
                    dead_code: true
                }
            },
            target: {
                files: {
                    'js/output.js': ['js/output.js']
                }
            },
            // Html5 Shiv
            ie: {
                files: {
                    'js/html5shiv.js': ['bower_components/html5shiv/src/html5shiv.js']
                }
            }
        },
        // Compass
        compass: {
            dev: {
                options: {
                    config: 'config.dev.rb'
                }
            },
            prod: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        // Watch
        watch: {
            js: {
                files: ['js/main.js'],
                tasks: ['concat', 'uglify:ie'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.registerTask('default', ['concat', 'uglify', 'compass:prod']);
};
