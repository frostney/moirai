import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Viewport, SceneDirector, Scene, GameObject, Behavior, Texture} from 'moirai';

class Game extends Component {
  render() {
    return (
      <Viewport>
        <SceneDirector>
          <Scene>
            <GameObject>
              <Texture source="http://facebook.github.io/react/img/logo.svg"/>
              <Behavior
                onUpdate={function(dt, gameObject) { gameObject.setState({x: gameObject.state.x + (dt * 10)}); }}/>
            </GameObject>
          </Scene>
        </SceneDirector>
      </Viewport>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('container'));
