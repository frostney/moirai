'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var GameObject = (function (_React$Component) {
  function GameObject() {
    _classCallCheck(this, GameObject);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(GameObject, _React$Component);

  GameObject.prototype.render = function render() {
    var position = 'absolute';

    var pos = this.props.position;
    if (typeof pos === 'string') {
      pos = pos.split(',');
    }

    var left = pos[0] + 'px';
    var top = pos[1] + 'px';

    var style = { position: position, left: left, top: top };

    return _React2['default'].createElement(
      'div',
      { className: 'gameobject', style: style },
      this.props.children
    );
  };

  return GameObject;
})(_React2['default'].Component);

GameObject.defaultProps = {
  position: '0,0'
};

exports['default'] = GameObject;
module.exports = exports['default'];
//# sourceMappingURL=GameObject.js.map