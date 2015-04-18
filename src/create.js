import React from 'react';

const create = function(gameContent) {
  
  return {
    render: function(element) {
      if (element = null) {
        var container = document.createElement('div');
        container.id = 'container';
        
        document.body.appendChild(container);
        
        element = document.getElementById('container');
      }
      
      React.render(gameContent, element);
    }
  }
};

