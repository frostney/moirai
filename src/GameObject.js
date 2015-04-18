import React from 'react';
import Events from './Events';

import processChildren from './processChildren';

class GameObject extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      x: props.initialX,
      y: props.initialY
    };
  }
  render() {
    var data = processChildren.call(this, this.props.children);
    
    if (data.onUpdate && data.onUpdate.length > 0) {
      Events.on('update', () => {
        data.onUpdate.forEach(updateCall => {
          updateCall.call(this, this);
        });
      });
    }
    
    var position = 'absolute';

    var left = this.state.x;
    var top = this.state.y;

    var style = {position, left, top};

    return (
      <div className="gameobject" style={style}>
        {this.props.children}
      </div>
    );
  }
}

GameObject.propTypes = {
  initialX: React.PropTypes.number,
  initialY: React.PropTypes.number,
  width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

GameObject.defaultProps = {
  initialX: 0,
  initialY: 0,
  width: 'auto',
  height: 'auto'
};

export default GameObject;
