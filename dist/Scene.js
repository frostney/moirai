'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Scene = (function (_React$Component) {
  function Scene() {
    _classCallCheck(this, Scene);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Scene, _React$Component);

  Scene.prototype.render = function render() {
    var style = {
      width: '100%',
      height: '100%'
    };

    return _react2['default'].createElement(
      'div',
      { className: 'scene', style: style },
      this.props.children
    );
  };

  return Scene;
})(_react2['default'].Component);

exports['default'] = Scene;
module.exports = exports['default'];
//# sourceMappingURL=Scene.js.map