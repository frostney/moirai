import React from 'react';

class GameObject extends React.Component {
  render() {
    var position = 'absolute';
    
    var pos = this.props.position;
    if (typeof pos === 'string') {
      pos = pos.split(',');
    }
    
    var left = pos[0] + 'px';
    var top = pos[1] + 'px';
    
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
