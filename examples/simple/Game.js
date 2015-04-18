import React from 'react';
import Moirai from 'moirai';

const {Viewport, SceneDirector, Scene, GameObject, Behavior, Texture} = Moirai;

Moirai(
  <Viewport>
    <SceneDirector>
      <Scene>
        <GameObject>
          <Texture source="something.png" />
          <Behavior onUpdate={function() {}} />
        </GameObject>
      </Scene>
    </SceneDirector>
  </Viewport>
).render();
