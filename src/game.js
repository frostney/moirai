import React from 'react';

import Viewport from 'moirai/viewport';
import SceneDirector from 'moirai/scenedirector'
import Scene from 'moirai/scene';
import GameObject from 'moirai/gameobject';

class Game extends React.Component {
  render() {
    return (
      <Viewport>
        <SceneDirector>
          <Scene>
            <GameObject type="image" asset="hero.png" position="10, 10" />
          </Scene>
        </SceneDirector>
      </Viewport>
    );
  }
}

React.render(<Game />, document.body);
