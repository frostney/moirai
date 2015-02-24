path = require 'path'

module.exports =
  lib:
    options:
      namespace: '<%= package.name %>'
      base: 'tmp/'
      footer: '\n//# sourceMappingURL=<%= package.name %>.js.map'
    files:
      'dist/<%= package.name %>.js': 'tmp/**/*.js'
  examples:
    options:
      base: 'examples/lib/'
    files:
      'examples/lib/react.js': 'examples/lib/react.js'
