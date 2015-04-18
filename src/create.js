import React from 'react';
import {Loop} from 'gamebox';

import Events from './Events';

const create = function(gameContent) {
  
  return {
    render: function(element) {
      if (element == null) {
        var container = document.createElement('div');
        container.id = 'container';
        
        document.body.appendChild(container);
        
        element = document.getElementById('container');
      }

      // Bind the game loop to the `update` event
      Loop.on('update', dt => {
        // Deltatime should not be a millisecond value, but a second one.
        // It should be a value between 0 - 1
        Events.trigger('update', dt / 1000);
      });
      
      React.render(gameContent, element);
      
      Loop.run();
    }
  };
};

export default create;
