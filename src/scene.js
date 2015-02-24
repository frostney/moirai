import React from 'react';

var Scene = React.createClass({
  render: function () {
    return (
      <div className="scene">
				{this.props.children}
      </div>
    );
  }
});

export default Scene;