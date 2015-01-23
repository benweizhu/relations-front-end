module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!src/js/libs/**/*.js']
        },
        bower: {
            install: {
                options: {
                    targetDir: './app/js/libs'
                }
            }
        },
        connect: {
            //to keep server alive, use command: grunt connect:server:keepalive
            server: {
                options: {
                    port: 3000,
                    base: 'app'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['bower:install', 'jshint', 'connect']);

};
