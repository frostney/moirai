'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

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

    return _React2['default'].createElement(
      'div',
      { className: 'scene-director', style: style },
      this.props.children
    );
  };

  return SceneDirector;
})(_React2['default'].Component);

exports['default'] = SceneDirector;
module.exports = exports['default'];
//# sourceMappingURL=SceneDirector.js.map