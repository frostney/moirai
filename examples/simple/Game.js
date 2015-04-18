import React from 'react';
import Moirai from 'moirai';

const {create, Viewport, SceneDirector, Scene, GameObject, Texture} = Moirai;

create(
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
