import React from 'react';

class Scene extends React.Component {
  render() {
    var style = {
      width: '100%',
      height: '100%'
    };
    
    return (
      <div className="scene" style={style}>
				{this.props.children}
      </div>
    );
  }
}

export default Scene;
