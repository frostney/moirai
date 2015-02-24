"use strict";

define('moirai/behavior', ["exports", "module", "react"], function (exports, module, _react) {
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var Behavior = React.createClass({
    displayName: "Behavior",

    render: function render() {
      return null;
    }
  });

  module.exports = Behavior;
});

"use strict";

define('moirai/game', ["exports", "react", "moirai/viewport", "moirai/scenedirector", "moirai/scene", "moirai/gameobject"], function (exports, _react, _moiraiViewport, _moiraiScenedirector, _moiraiScene, _moiraiGameobject) {
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var Viewport = _interopRequire(_moiraiViewport);

  var SceneDirector = _interopRequire(_moiraiScenedirector);

  var Scene = _interopRequire(_moiraiScene);

  var GameObject = _interopRequire(_moiraiGameobject);

  var Game = React.createClass({
    displayName: "Game",

    render: function render() {
      return React.createElement(
        Viewport,
        { width: "auto", height: "auto" },
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
    }
  });

  React.render(React.createElement(Game, null), document.body);
});

"use strict";

define('moirai/gameobject', ["exports", "module", "react"], function (exports, module, _react) {
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var GameObject = React.createClass({
    displayName: "GameObject",

    render: function render() {

      return React.createElement(
        "div",
        { className: "gameobject" },
        this.props.children
      );
    }
  });

  module.exports = GameObject;
});

"use strict";

define('moirai/scene', ["exports", "module", "react"], function (exports, module, _react) {
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var Scene = React.createClass({
    displayName: "Scene",

    render: function render() {
      return React.createElement(
        "div",
        { className: "scene" },
        this.props.children
      );
    }
  });

  module.exports = Scene;
});

"use strict";

define('moirai/scenedirector', ["exports", "module", "react"], function (exports, module, _react) {
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var SceneDirector = React.createClass({
    displayName: "SceneDirector",

    render: function render() {
      return React.createElement(
        "div",
        { className: "scene-director" },
        this.props.children
      );
    }
  });

  module.exports = SceneDirector;
});

"use strict";

define('moirai/viewport', ["exports", "module", "react"], function (exports, module, _react) {
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var Viewport = React.createClass({
    displayName: "Viewport",

    getInitialProps: function getInitialProps() {
      return {
        width: "auto",
        height: "auto"
      };
    },
    render: function render() {
      var width = this.props.width === "auto" ? "100%" : this.props.width + "px";
      var height = this.props.height === "auto" ? "100%" : this.props.height + "px";

      var style = { width: width, height: height };

      return React.createElement(
        "div",
        { className: "viewport", style: style },
        this.props.children
      );
    }
  });

  module.exports = Viewport;
});

//# sourceMappingURL=moirai.js.map