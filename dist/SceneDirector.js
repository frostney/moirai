'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SceneDirector = (function (_React$Component) {
  function SceneDirector() {
    _classCallCheck(this, SceneDirector);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(SceneDirector, _React$Component);

  SceneDirector.prototype.render = function render() {
    var style = {
      width: '100%',
      height: '100%'
    };

    return _react2['default'].createElement(
      'div',
      { className: 'scene-director', style: style },
      this.props.children
    );
  };

  return SceneDirector;
})(_react2['default'].Component);

exports['default'] = SceneDirector;
module.exports = exports['default'];
//# sourceMappingURL=SceneDirector.js.map