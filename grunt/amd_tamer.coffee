path = require 'path'

module.exports =
  lib:
    options:
      namespace: '<%= package.name %>'
      base: 'tmp/amd'
      footer: '\n//# sourceMappingURL=<%= package.name %>.js.map'
      processName: (name) -> name.toLowerCase()
    files:
      'dist/amd/<%= package.name %>.js': 'tmp/amd/**/*.js'
  examples:
    options:
      base: 'examples/lib/'
    files:
      'examples/lib/react.js': 'examples/lib/react.js'
