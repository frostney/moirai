module.exports = (grunt) ->
  files: ['src/**/*.js'],
  options: grunt.file.readJSON('.jshintrc')