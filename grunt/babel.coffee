module.exports =
  options:
    sourceMap: true
    loose: ['es6.classes']
  amd:
    options:
      modules: 'amd'
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**/*.js'],
      dest: 'tmp/amd'
    }]
  common:
    options:
      modules: 'common'
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**/*.js'],
      dest: 'dist/common'
    }]
