import React from 'react';

import Texture from './Texture';
import Behavior from './Behavior';

import Events from './Events';

export default function processChildren(children) {
  var data = {};
  
  React.Children.forEach(children, function(child) {
    if (child.type === Texture) {
      if (child.props.source) {
        data.texture = child.props.source;
      }
    }
    
    if (child.type === Behavior) {
      if (child.props.onUpdate) {
        (data.onUpdate = data.onUpdate || []).push(child.props.onUpdate);
      }
    }
  });
  
  return data;
};
