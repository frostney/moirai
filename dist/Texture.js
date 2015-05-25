'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Texture = (function (_React$Component) {
  function Texture() {
    _classCallCheck(this, Texture);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Texture, _React$Component);

  Texture.prototype.render = function render() {
    return null;
  };

  return Texture;
})(_react2['default'].Component);

Texture.propTypes = {
  x: _react2['default'].PropTypes.number,
  y: _react2['default'].PropTypes.number,
  width: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  height: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string])
};

Texture.defaultProps = {
  x: 0,
  y: 0,
  width: 'auto',
  height: 'auto'
};

exports['default'] = Texture;
module.exports = exports['default'];
//# sourceMappingURL=Texture.js.map