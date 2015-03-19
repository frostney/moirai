module.exports =
  options:
    report: 'gzip'
  compact:
    files: [{
      expand: true
      cwd: 'dist/amd'
      src: ['**/*.js']
      dest: 'dist/'
      ext: '.min.js'
      extDot: 'last'
    }]
