'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gamebox = require('gamebox');

var _Events = require('./Events');

var _Events2 = _interopRequireDefault(_Events);

var create = function create(gameContent) {

  return {
    render: function render(element) {
      if (element == null) {
        var container = document.createElement('div');
        container.id = 'container';

        document.body.appendChild(container);

        element = document.getElementById('container');
      }

      // Bind the game loop to the `update` event
      _gamebox.Loop.on('update', function (dt) {
        // Deltatime should not be a millisecond value, but a second one.
        // It should be a value between 0 - 1
        _Events2['default'].trigger('update', dt / 1000);
      });

      _react2['default'].render(gameContent, element);

      _gamebox.Loop.run();
    }
  };
};

exports['default'] = create;
module.exports = exports['default'];
//# sourceMappingURL=create.js.map