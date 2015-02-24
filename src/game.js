import React from 'react';

var Game = React.createClass({
  render: function() {
    return (
      <Viewport width="auto" height="auto">
        <SceneDirector>
          <Scene>
            <GameObject type="image" asset="hero.png" position="10, 10" />
          </Scene>
        </SceneDirector>
      </Viewport>
    );
  }
});

React.render(<Game />, document.body);