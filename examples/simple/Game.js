import React from 'react';
import Moirai from 'moirai';

const {Viewport, SceneDirector, Scene, GameObject, Behavior, Texture} = Moirai;

Moirai(
  <Viewport>
    <SceneDirector>
      <Scene>
        <GameObject>
          <Texture source="http://facebook.github.io/react/img/logo.svg" />
          <Behavior onUpdate={function(dt, gameObject) { gameObject.setState({x: gameObject.state.x + 1}); }} />
        </GameObject>
      </Scene>
    </SceneDirector>
  </Viewport>
).render();
