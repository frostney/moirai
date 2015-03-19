module.exports = (grunt) ->

  require('time-grunt')(grunt)

  require('load-grunt-config') grunt,
    jitGrunt: true

  grunt.registerTask 'compile', ['clean', 'babel', 'amd_tamer:lib', 'uglify']
  
  grunt.registerTask 'examples', ['bowercopy', 'amd_tamer:examples']
  
  grunt.registerTask 'default', ['compile', 'examples']
  
  #grunt.registerTask 'test', ['default', 'jshint', 'consolidate', 'babel:test', 'amd_tamer:test', 'mocha']
  
  #grunt.registerTask 'doc', ['groc']
  
  #grunt.registerTask 'pages', ['metalsmith', 'doc', 'bowercopy']
