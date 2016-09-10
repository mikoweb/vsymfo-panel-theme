module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        path: {
            src: 'src/',
            modules: 'node_modules/'
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
                expand: true,
                cwd: '<%= path.modules %>bootstrap-layout/src/sass',
                src: '**',
                dest: '<%= path.src %>bootstrap-layout'
            },
            bootstrapLayoutScrollable: {
                expand: true,
                cwd: '<%= path.modules %>bootstrap-layout-scrollable/src/sass',
                src: '**',
                dest: '<%= path.src %>bootstrap-layout/scrollable'
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', [
        'copy:adminplus',
        'copy:mdColors',
        'copy:bootstrapLayout',
        'copy:bootstrapLayoutScrollable',
        'copy:simplebar'
    ]);
};
