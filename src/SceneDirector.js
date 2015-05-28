import React from 'react';

import Scene from './Scene';

class SceneDirector extends React.Component {
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
