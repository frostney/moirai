"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

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
      width: "100%",
      height: "100%"
    };

    return React.createElement(
      "div",
      { className: "scene-director", style: style },
      this.props.children
    );
  };

  return SceneDirector;
})(React.Component);

module.exports = SceneDirector;
//# sourceMappingURL=SceneDirector.js.map