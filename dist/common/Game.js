"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var Viewport = _interopRequire(require("moirai/viewport"));

var SceneDirector = _interopRequire(require("moirai/scenedirector"));

var Scene = _interopRequire(require("moirai/scene"));

var GameObject = _interopRequire(require("moirai/gameobject"));

var Game = (function (_React$Component) {
  function Game() {
    _classCallCheck(this, Game);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Game, _React$Component);

  Game.prototype.render = function render() {
    return React.createElement(
      Viewport,
      null,
      React.createElement(
        SceneDirector,
        null,
        React.createElement(
          Scene,
          null,
          React.createElement(GameObject, { type: "image", asset: "hero.png", position: "10, 10" })
        )
      )
    );
  };

  return Game;
})(React.Component);

React.render(React.createElement(Game, null), document.body);
//# sourceMappingURL=Game.js.map