module.exports =
  options:
    report: 'gzip'
  compact:
    files: [{
      expand: true
      cwd: 'dist/'
      src: ['**/*.js']
      dest: 'dist/'
      ext: '.min.js'
      extDot: 'last'
    }]