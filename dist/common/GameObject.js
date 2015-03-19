"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var GameObject = (function (_React$Component) {
  function GameObject() {
    _classCallCheck(this, GameObject);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(GameObject, _React$Component);

  GameObject.prototype.render = function render() {
    var position = "absolute";

    var pos = this.props.position;
    if (typeof pos === "string") {
      pos = pos.split(",");
    }

    var left = pos[0] + "px";
    var top = pos[1] + "px";

    var style = { position: position, left: left, top: top };

    return React.createElement(
      "div",
      { className: "gameobject", style: style },
      this.props.children
    );
  };

  return GameObject;
})(React.Component);

GameObject.defaultProps = {
  position: "0,0"
};

module.exports = GameObject;
//# sourceMappingURL=GameObject.js.map