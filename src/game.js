import React from 'react';

import Viewport from 'moirai/viewport';
import SceneDirector from 'moirai/scenedirector'
import Scene from 'moirai/scene';
import GameObject from 'moirai/gameobject';

var Game = React.createClass({
  render: function() {
    return (
      <Viewport width="auto" height="auto">
        <SceneDirector>
          <Scene>
            <GameObject type="image" asset="hero.png" position="10, 10" />
          </Scene>
        </SceneDirector>
      </Viewport>
    );
  }
});

React.render(<Game />, document.body);
