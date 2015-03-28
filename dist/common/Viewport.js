"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var scaleHeightToFit = function scaleHeightToFit() {
  var scaleFactor = 1;
  var height = this.props.height;

  if (height > this.state.containerHeight) {
    scaleFactor = this.state.containerHeight / height;
  }

  return scaleFactor;
};

var scaleWidthToFit = function scaleWidthToFit() {
  var scaleFactor = 1;
  var width = this.props.width;

  if (width > this.state.containerWidth) {
    scaleFactor = this.state.containerHeight / width;
  }

  return scaleFactor;
};

var Viewport = (function (_React$Component) {
  function Viewport(props) {
    _classCallCheck(this, Viewport);

    _React$Component.call(this, props);

    this.state = {
      containerWidth: 0,
      containerHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  _inherits(Viewport, _React$Component);

  Viewport.prototype.updateDimensions = function updateDimensions() {
    this.setState({ containerWidth: window.innerWidth, containerHeight: window.innerHeight });
  };

  Viewport.prototype.componentWillMount = function componentWillMount() {
    this.updateDimensions();
  };

  Viewport.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  };

  Viewport.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  };

  Viewport.prototype.render = function render() {
    var autoSize = false;
    var scaleFactor = 1;

    switch (this.props.mode) {
      case "scaleToFit":
        {
          scaleFactor = Math.min(scaleWidthToFit.call(this), scaleHeightToFit.call(this));
          break;
        }
      case "scaleWidthToFit":
        {
          scaleFactor = scaleWidthToFit.call(this);
          break;
        }
      case "scaleHeightToFit":
        {
          scaleFactor = scaleHeightToFit.call(this);
          break;
        }
      case "fill":
        autoSize = true;
      default:
        break;
    }

    var width = this.props.width + "px";
    var height = this.props.height + "px";

    if (autoSize) {
      width = "100%";
      height = "100%";
    }

    var transform = "scale(" + scaleFactor + ", " + scaleFactor + ")";

    var position = "absolute";

    var style = { position: position, width: width, height: height, transform: transform };

    if (!autoSize && this.props.center) {
      style.left = "50%";
      style.top = "50%";
      style.marginLeft = this.props.width / -2 + "px";
      style.marginTop = this.props.height / -2 + "px";
    }

    return React.createElement(
      "div",
      { className: "viewport", style: style },
      this.props.children
    );
  };

  return Viewport;
})(React.Component);

Viewport.defaultProps = {
  width: 800,
  height: 480,
  mode: "scaleToFit",
  center: true
};

Viewport.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  mode: React.PropTypes.string,
  center: React.PropTypes.bool
};

module.exports = Viewport;
//# sourceMappingURL=Viewport.js.map