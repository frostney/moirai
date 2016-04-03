import React from 'react';

import ReactSceneDirector from 'react-scenedirector';

import {Loop} from 'gamebox';
import Events from './Events';

class SceneDirector extends React.Component {
  componentDidMount() {
    // Bind the game loop to the `update` event
    Loop.on('update', dt => {
      // Deltatime should not be a millisecond value, but a second one.
      // It should be a value between 0 - 1
      Events.trigger('update', dt / 1000);
    });

    Loop.run();
  }

  componentWillUmount() {
    // TODO: Well, stop these fancy events!
  }

  render() {
    return <ReactSceneDirector {...this.props} />;
  }
}

export default SceneDirector;
