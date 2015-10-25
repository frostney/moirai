import React from 'react';

import Scene from './Scene';

import {Loop} from 'gamebox';
import Events from './Events';

class SceneDirector extends React.Component {
  componentDidMount() {
    // Bind the game loop to the `update` event
    Loop.on('update', dt => {
      // Deltatime should not be a millisecond value, but a second one.
      // It should be a value between 0 - 1
      Events.trigger('update', dt / 1000);
    });

    Loop.run();
  }

  componentWillUmount() {
    // TODO: Well, stop these fancy events!
  }

  render() {
    var style = {
      width: '100%',
      height: '100%'
    };

    var currentScene = null;

    if (this.props.currentScene) {
      React.Children.forEach(this.props.children, child => {
        if (child.type === Scene) {
          if (child.props.name === this.props.currentScene) {
            currentScene = child;
          }
        }
      });
    } else {
      currentScene = this.props.children;
    }

    return (
      <div className="scene-director" style={style}>
        {currentScene}
      </div>
    );
  }
}

SceneDirector.defaultProps = {
  currentScene: ''
};

export default SceneDirector;
