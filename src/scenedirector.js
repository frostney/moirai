import React from 'react';

var SceneDirector = React.createClass({
  render: function() {
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
});

export default SceneDirector;
