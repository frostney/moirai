import React from 'react';

class SceneDirector extends React.Component {
  render() {
    var style = {
      width: '100%',
      height: '100%'
    };
    
    return (
      <div className="scene-director" style={style}>
        {this.props.children}
      </div>
    );
  }
}

SceneDirector.defaultProps = {
  currentScene: ''
};

export default SceneDirector;
