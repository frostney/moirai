define('moirai/asset', ["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

  var Asset = (function (_React$Component) {
    function Asset() {
      _classCallCheck(this, Asset);

      if (_React$Component != null) {
        _React$Component.apply(this, arguments);
      }
    }

    _inherits(Asset, _React$Component);

    return Asset;
  })(React.Component);

  module.exports = Asset;
});

define('moirai/behavior', ["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

  var Behavior = (function (_React$Component) {
    function Behavior() {
      _classCallCheck(this, Behavior);

      if (_React$Component != null) {
        _React$Component.apply(this, arguments);
      }
    }

    _inherits(Behavior, _React$Component);

    Behavior.prototype.render = function render() {
      return null;
    };

    return Behavior;
  })(React.Component);

  module.exports = Behavior;
});

define('moirai/game', ["exports", "react", "moirai/viewport", "moirai/scenedirector", "moirai/scene", "moirai/gameobject"], function (exports, _react, _moiraiViewport, _moiraiScenedirector, _moiraiScene, _moiraiGameobject) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

  var Viewport = _interopRequire(_moiraiViewport);

  var SceneDirector = _interopRequire(_moiraiScenedirector);

  var Scene = _interopRequire(_moiraiScene);

  var GameObject = _interopRequire(_moiraiGameobject);

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
});

define('moirai/gameobject', ["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

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
});

define('moirai/scene', ["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

  var Scene = (function (_React$Component) {
    function Scene() {
      _classCallCheck(this, Scene);

      if (_React$Component != null) {
        _React$Component.apply(this, arguments);
      }
    }

    _inherits(Scene, _React$Component);

    Scene.prototype.render = function render() {
      var style = {
        width: "100%",
        height: "100%"
      };

      return React.createElement(
        "div",
        { className: "scene", style: style },
        this.props.children
      );
    };

    return Scene;
  })(React.Component);

  module.exports = Scene;
});

define('moirai/scenedirector', ["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

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
});

define('moirai/viewport', ["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var React = _interopRequire(_react);

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
    function Viewport() {
      _classCallCheck(this, Viewport);

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
});

define('moirai', ["exports", "module", "./Game", "./Viewport", "./GameObject", "./Scene", "./SceneDirector"], function (exports, module, _Game, _Viewport, _GameObject, _Scene, _SceneDirector) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var Game = _interopRequire(_Game);

  var Viewport = _interopRequire(_Viewport);

  var GameObject = _interopRequire(_GameObject);

  var Scene = _interopRequire(_Scene);

  var SceneDirector = _interopRequire(_SceneDirector);

  module.exports = { Game: Game, Viewport: Viewport, GameObject: GameObject, Scene: Scene, SceneDirector: SceneDirector };
});

//# sourceMappingURL=moirai.js.map