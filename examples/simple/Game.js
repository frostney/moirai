import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Viewport, SceneDirector, GameObject, Behavior, Texture} from 'moirai';

const Scene1 = () => (
  <GameObject>
    <Texture source="http://facebook.github.io/react/img/logo.svg"/>
    <Behavior
      onUpdate={function(dt, gameObject) { gameObject.setState({x: gameObject.state.x + (dt * 10)}); }}/>
  </GameObject>
)

class Game extends Component {
  render() {
    return (
      <Viewport>
        <SceneDirector scenes={{Scene1}} />
      </Viewport>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('container'));
