'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Events = require('./Events');

var _Events2 = _interopRequireDefault(_Events);

var _processChildren = require('./processChildren');

var _processChildren2 = _interopRequireDefault(_processChildren);

var GameObject = (function (_React$Component) {
  function GameObject(props) {
    _classCallCheck(this, GameObject);

    _React$Component.call(this, props);

    this.state = {
      x: props.initialX,
      y: props.initialY,
      width: 0,
      height: 0,
      texture: ''
    };
  }

  _inherits(GameObject, _React$Component);

  GameObject.prototype.componentDidMount = function componentDidMount() {
    var _this = this;

    _processChildren2['default'].call(this, this.props.children, function (data) {
      if (data.texture && Object.keys(data.texture).length > 0) {
        _this.setState({
          texture: data.texture.source,
          width: data.texture.originalWidth,
          height: data.texture.originalHeight
        });
      }

      if (data.onUpdate && data.onUpdate.length > 0) {
        // It would be cool if EventMap could do namespaces, which would definitely help a lot
        _Events2['default'].on('update', function (dt) {
          data.onUpdate.forEach(function (updateCall) {
            updateCall.call(_this, dt, _this);
          });
        });
      }
    });
  };

  GameObject.prototype.componentWillUnmount = function componentWillUnmount() {};

  GameObject.prototype.render = function render() {
    var position = 'absolute';

    var left = this.state.x;
    var top = this.state.y;
    var width = this.state.width;
    var height = this.state.height;

    if (this.state.texture) {
      var backgroundImage = 'url(' + this.state.texture + ')';
      var backgroundRepeat = 'no-repeat';
    }

    var style = { position: position, left: left, top: top, width: width, height: height, backgroundImage: backgroundImage, backgroundRepeat: backgroundRepeat };

    return _react2['default'].createElement(
      'div',
      { className: 'gameobject', style: style },
      this.props.children
    );
  };

  return GameObject;
})(_react2['default'].Component);

GameObject.propTypes = {
  initialX: _react2['default'].PropTypes.number,
  initialY: _react2['default'].PropTypes.number,
  width: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  height: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string])
};

GameObject.defaultProps = {
  initialX: 0,
  initialY: 0,
  width: 'auto',
  height: 'auto'
};

exports['default'] = GameObject;
module.exports = exports['default'];

// TODO: Remove events here
//# sourceMappingURL=GameObject.js.map