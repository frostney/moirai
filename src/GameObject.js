import React from 'react';

class GameObject extends React.Component {
  render() {
    var position = 'absolute';
    
    var left = this.props.x;
    var top = this.props.y;
    
    var style = {position, left, top};
    
    return (
      <div className="gameobject" style={style}>
				{this.props.children}
      </div>
    );
  }
}

GameObject.defaultProps = {
  x: 0,
  y: 0
};

export default GameObject;
