'use strict';

var React = require('react');
React = 'default' in React ? React['default'] : React;
var gamebox = require('gamebox');
var EventMap = require('eventmap');
EventMap = 'default' in EventMap ? EventMap['default'] : EventMap;

var babelHelpers = {};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers;

var scaleHeightToFit = function () {
  var scaleFactor = 1.0;
  var height = this.props.height;

  if (height > this.state.containerHeight) {
    scaleFactor = this.state.containerHeight / height;
  }

  return scaleFactor;
};

var scaleWidthToFit = function () {
  var scaleFactor = 1.0;
  var width = this.props.width;

  if (width > this.state.containerWidth) {
    scaleFactor = this.state.containerHeight / width;
  }

  return scaleFactor;
};

var Viewport = function (_React$Component) {
  babelHelpers.inherits(Viewport, _React$Component);

  function Viewport(props) {
    babelHelpers.classCallCheck(this, Viewport);

    var _this = babelHelpers.possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      containerWidth: 0,
      containerHeight: 0
    };

    _this.updateDimensions = _this.updateDimensions.bind(_this);
    return _this;
  }

  Viewport.prototype.updateDimensions = function updateDimensions() {
    this.setState({ containerWidth: window.innerWidth, containerHeight: window.innerHeight });
  };

  Viewport.prototype.componentWillMount = function componentWillMount() {
    this.updateDimensions();
  };

  Viewport.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  };

  Viewport.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  };

  Viewport.prototype.render = function render() {
    var autoSize = false;
    var scaleFactor = 1.0;

    switch (this.props.mode) {
      case 'scaleToFit':
        {
          scaleFactor = Math.min(scaleWidthToFit.call(this), scaleHeightToFit.call(this));
          break;
        }
      case 'scaleWidthToFit':
        {
          scaleFactor = scaleWidthToFit.call(this);
          break;
        }
      case 'scaleHeightToFit':
        {
          scaleFactor = scaleHeightToFit.call(this);
          break;
        }
      case 'fill':
        autoSize = true;
      default:
        break;
    }

    var width = this.props.width + 'px';
    var height = this.props.height + 'px';

    if (autoSize) {
      width = '100%';
      height = '100%';
    }

    var transform = 'scale(' + scaleFactor + ', ' + scaleFactor + ')';

    var position = 'absolute';
    var overflow = 'hidden';

    var style = { position: position, overflow: overflow, width: width, height: height, transform: transform };

    if (!autoSize && this.props.center) {
      style.left = '50%';
      style.top = '50%';
      style.marginLeft = this.props.width / -2 + 'px';
      style.marginTop = this.props.height / -2 + 'px';
    }

    return React.createElement(
      'div',
      { className: 'viewport', style: style },
      this.props.children
    );
  };

  return Viewport;
}(React.Component);

Viewport.defaultProps = {
  width: 800,
  height: 480,
  mode: 'scaleToFit',
  center: true
};

Viewport.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  mode: React.PropTypes.string.isRequired,
  center: React.PropTypes.bool.isRequired
};

var GameEvents = new EventMap();

var Texture = function (_React$Component) {
  babelHelpers.inherits(Texture, _React$Component);

  function Texture() {
    babelHelpers.classCallCheck(this, Texture);
    return babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Texture.prototype.render = function render() {
    return null;
  };

  return Texture;
}(React.Component);

Texture.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

Texture.defaultProps = {
  x: 0,
  y: 0,
  width: 'auto',
  height: 'auto'
};

var Behavior = function (_React$Component) {
  babelHelpers.inherits(Behavior, _React$Component);

  function Behavior() {
    babelHelpers.classCallCheck(this, Behavior);
    return babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Behavior.prototype.render = function render() {
    return null;
  };

  return Behavior;
}(React.Component);

// TODO: Rather use a Promise
function processChildren(children, callback) {
  var data = {};

  React.Children.forEach(children, function (child) {
    if (child.type === Texture) {
      data.texture = {};

      if (child.props.source) {
        data.texture.source = child.props.source;
      }

      var img = new Image();
      img.src = data.texture.source;

      img.onload = function () {
        data.texture.originalWidth = img.width;
        data.texture.originalHeight = img.height;

        callback(data);
      };
    }

    if (child.props.onUpdate) {
      (data.onUpdate = data.onUpdate || []).push(child.props.onUpdate);
    }
  });
};

var GameObject = function (_React$Component) {
  babelHelpers.inherits(GameObject, _React$Component);

  function GameObject(props) {
    babelHelpers.classCallCheck(this, GameObject);

    var _this = babelHelpers.possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      x: props.initialX,
      y: props.initialY,
      width: 0,
      height: 0,
      texture: ''
    };
    return _this;
  }

  GameObject.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    processChildren.call(this, this.props.children, function (data) {
      if (data.texture && Object.keys(data.texture).length > 0) {
        _this2.setState({
          texture: data.texture.source,
          width: data.texture.originalWidth,
          height: data.texture.originalHeight
        });
      }

      if (data.onUpdate && data.onUpdate.length > 0) {
        // It would be cool if EventMap could do namespaces, which would definitely help a lot
        GameEvents.on('update', function (dt) {
          data.onUpdate.forEach(function (updateCall) {
            updateCall.call(_this2, dt, _this2);
          });
        });
      }
    });
  };

  GameObject.prototype.componentWillUnmount = function componentWillUnmount() {
    // TODO: Remove events here
  };

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

    return React.createElement(
      'div',
      { className: 'gameobject', style: style },
      this.props.children
    );
  };

  return GameObject;
}(React.Component);

GameObject.propTypes = {
  initialX: React.PropTypes.number,
  initialY: React.PropTypes.number,
  width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

GameObject.defaultProps = {
  initialX: 0,
  initialY: 0,
  width: 'auto',
  height: 'auto'
};

var Scene = function (_React$Component) {
  babelHelpers.inherits(Scene, _React$Component);

  function Scene() {
    babelHelpers.classCallCheck(this, Scene);
    return babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Scene.prototype.render = function render() {
    var style = {
      width: '100%',
      height: '100%'
    };

    return React.createElement(
      'div',
      { className: 'scene', style: style },
      this.props.children
    );
  };

  return Scene;
}(React.Component);

var SceneDirector = function (_React$Component) {
  babelHelpers.inherits(SceneDirector, _React$Component);

  function SceneDirector() {
    babelHelpers.classCallCheck(this, SceneDirector);
    return babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SceneDirector.prototype.componentDidMount = function componentDidMount() {
    // Bind the game loop to the `update` event
    gamebox.Loop.on('update', function (dt) {
      // Deltatime should not be a millisecond value, but a second one.
      // It should be a value between 0 - 1
      GameEvents.trigger('update', dt / 1000);
    });

    gamebox.Loop.run();
  };

  SceneDirector.prototype.componentWillUmount = function componentWillUmount() {
    // TODO: Well, stop these fancy events!
  };

  SceneDirector.prototype.render = function render() {
    var _this2 = this;

    var style = {
      width: '100%',
      height: '100%'
    };

    var currentScene = null;

    if (this.props.currentScene) {
      React.Children.forEach(this.props.children, function (child) {
        if (child.type === Scene) {
          if (child.props.name === _this2.props.currentScene) {
            currentScene = child;
          }
        }
      });
    } else {
      currentScene = this.props.children;
    }

    return React.createElement(
      'div',
      { className: 'scene-director', style: style },
      currentScene
    );
  };

  return SceneDirector;
}(React.Component);

SceneDirector.defaultProps = {
  currentScene: ''
};

var Audio = function (_React$Component) {
  babelHelpers.inherits(Audio, _React$Component);

  function Audio() {
    babelHelpers.classCallCheck(this, Audio);
    return babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Audio.prototype.render = function render() {
    return React.createElement('audio', null);
  };

  return Audio;
}(React.Component);

var Moirai = {};

Moirai.Viewport = Viewport;
Moirai.GameObject = GameObject;
Moirai.Scene = Scene;
Moirai.SceneDirector = SceneDirector;
Moirai.Audio = Audio;
Moirai.Events = GameEvents;
Moirai.Texture = Texture;
Moirai.Behavior = Behavior;

module.exports = Moirai;