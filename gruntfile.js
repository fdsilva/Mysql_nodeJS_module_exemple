module.exports = function (grunt) {
  grunt.initConfig({
    execute: {
      target: {
        src: ['app.js']
      }
    },
    watch: {
      scripts: {
        files: ['index.js'],
        tasks: ['execute'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-execute');
};