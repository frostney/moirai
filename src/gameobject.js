import React from 'react';

var GameObject = React.createClass({
  render: function() {
    
    return (
      <div class="gameobject">
				{this.props.children}
      </div>
    );
  }
});

export default GameObject;