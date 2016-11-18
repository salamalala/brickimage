
'use strict';


module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jekyll: {
           build : {
               dest: '_site'
           }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    '_sass/main.css': '_sass/main.scss'
                }
            }
        },

        //do some clever stuff to the css file such as minify and autoprefix it.
        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                files: {
                    '_site/css/main-min.css': '_sass/main.css'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                  '_site/js/main-min.js': [
                    '_js/*.js'
                    ]
                }
            }
        },

        //autoreload browser and access it from different devices
        browserSync: {
            bsFiles: {
                src : ['_site']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                }
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_sass/**/*.{scss, sass}'],
                tasks: ['sass', 'postcss']
            },
            js: {
                files: ['_js/*.js'],
                tasks: ['uglify']
            },
            jekyll: {
                files: ['_layouts/*.html', '_includes/*.html', 'index.html', '_sass/**/*.{scss, sass}', '_includes/*.svg'],
                tasks: ['jekyll']
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'postcss',
                'uglify'
        ],
        options: {
            logConcurrentOutput: true
        }
    }

    });

    // Register the grunt serve task
    grunt.registerTask('default', [
        'concurrent:serve', 'jekyll', 'browserSync', 'watch'
    ]);

};
