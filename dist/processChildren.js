'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = processChildren;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Texture = require('./Texture');

var _Texture2 = _interopRequireDefault(_Texture);

var _Behavior = require('./Behavior');

var _Behavior2 = _interopRequireDefault(_Behavior);

var _Events = require('./Events');

var _Events2 = _interopRequireDefault(_Events);

// TODO: Rather use a Promise

function processChildren(children, callback) {
  var data = {};

  _react2['default'].Children.forEach(children, function (child) {
    if (child.type === _Texture2['default']) {
      data.texture = {};

      if (child.props.source) {
        data.texture.source = child.props.source;
      }

      var img = new Image();
      img.src = data.texture.source;

      img.onload = function () {
        data.texture.originalWidth = img.width;
        data.texture.originalHeight = img.height;

        callback(data);
      };
    }

    if (child.props.onUpdate) {
      (data.onUpdate = data.onUpdate || []).push(child.props.onUpdate);
    }
  });
}

;
module.exports = exports['default'];
//# sourceMappingURL=processChildren.js.map