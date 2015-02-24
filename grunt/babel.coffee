module.exports =
  options:
    sourceMap: true
    loose: ['es6.classes']
  dist:
    options:
      modules: 'amd'
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**/*.js'],
      dest: 'tmp/'
    }]
