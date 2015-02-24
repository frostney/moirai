import React from 'react';

var SceneDirector = React.createClass({
  render: function() {
    return (
      <div className="scene-director">
        {this.props.children}
      </div>
    );
  }
});

export default SceneDirector;
