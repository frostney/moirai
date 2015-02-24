path = require 'path'

module.exports =
  options:
    namespace: '<%= package.name %>'
    base: 'tmp/'
  all:
    options:
      footer: '\n//# sourceMappingURL=<%= package.name %>.js.map'
    files:
      'dist/<%= package.name %>.js': 'tmp/**/*.js'
