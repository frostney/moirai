module.exports = (grunt) ->

  require('time-grunt')(grunt)

  require('load-grunt-config') grunt,
    jitGrunt: true

  grunt.registerTask 'default', ['clean', 'babel:dist', 'amd_tamer', 'uglify']
  
  #grunt.registerTask 'test', ['default', 'jshint', 'consolidate', 'babel:test', 'amd_tamer:test', 'mocha']
  
  #grunt.registerTask 'doc', ['groc']
  
  #grunt.registerTask 'pages', ['metalsmith', 'doc', 'bowercopy']
