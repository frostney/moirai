import React from 'react';

var GameObject = React.createClass({
  getInitialProps: function() {
    return {
      position: '0,0'
    }
  },
  render: function() {
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
});

export default GameObject;
