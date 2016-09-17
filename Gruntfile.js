module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        path: {
            src: 'src/',
            public: 'public/',
            modules: 'node_modules/',
            bower: 'src/bower_components/',
            authors: 'authors/'
        },
        copy: {
            adminplus: {
                expand: true,
                cwd: '<%= path.modules %>adminplus/sass',
                src: '**',
                dest: '<%= path.src %>adminplus'
            },
            mdColors: {
                expand: true,
                cwd: '<%= path.modules %>sass-md-colors/colors',
                src: '**',
                dest: '<%= path.src %>sass-md-colors'
            },
            bootstrapLayout: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= path.modules %>bootstrap-layout/src/sass',
                        src: '**',
                        dest: '<%= path.src %>bootstrap-layout'
                    },
                    {
                        nonull: true,
                        src: '<%= path.modules %>bootstrap-layout/dist/bootstrap-layout.js',
                        dest: '<%= path.public %>js/bootstrap-layout.js'
                    }
                ]
            },
            bootstrapLayoutScrollable: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= path.modules %>bootstrap-layout-scrollable/src/sass',
                        src: '**',
                        dest: '<%= path.src %>bootstrap-layout/scrollable'
                    },
                    {
                        nonull: true,
                        src: '<%= path.modules %>bootstrap-layout-scrollable/dist/bootstrap-layout-scrollable.js',
                        dest: '<%= path.public %>js/bootstrap-layout-scrollable.js'
                    }
                ]
            },
            simplebar: {
                files: [
                    {
                        nonull: true,
                        src: '<%= path.modules %>simplebar/src/simplebar.css',
                        dest: '<%= path.src %>simplebar/simplebar.scss'
                    },
                    {
                        nonull: true,
                        src: '<%= path.modules %>simplebar/dist/simplebar.min.js',
                        dest: '<%= path.src %>simplebar/simplebar.min.js'
                    }
                ]
            },
            fontAwesome: {
                expand: true,
                cwd: '<%= path.bower %>components-font-awesome/fonts',
                src: '**',
                dest: '<%= path.public %>fonts/font-awesome'
            },
            authors: {
                files: [
                    {
                        nonull: true,
                        src: '<%= path.modules %>adminplus/README.md',
                        dest: '<%= path.authors %>adminplus.md'
                    },
                    {
                        nonull: true,
                        src: '<%= path.modules %>sass-md-colors/README.md',
                        dest: '<%= path.authors %>sass-md-colors.md'
                    },
                    {
                        nonull: true,
                        src: '<%= path.modules %>bootstrap-layout/README.md',
                        dest: '<%= path.authors %>bootstrap-layout.md'
                    },
                    {
                        nonull: true,
                        src: '<%= path.modules %>bootstrap-layout-scrollable/README.md',
                        dest: '<%= path.authors %>bootstrap-layout-scrollable.md'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', [
        'copy:adminplus',
        'copy:mdColors',
        'copy:bootstrapLayout',
        'copy:bootstrapLayoutScrollable',
        'copy:simplebar',
        'copy:fontAwesome'
    ]);

    grunt.registerTask('authors', [
        'copy:authors'
    ]);
};
