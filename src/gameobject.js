import React from 'react';

var GameObject = React.createClass({
  render: function() {
    
    return (
      <div className="gameobject">
				{this.props.children}
      </div>
    );
  }
});

export default GameObject;
