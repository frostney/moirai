import React from 'react';

import Texture from './Texture';
import Behavior from './Behavior';

import Events from './Events';

// TODO: Rather use a Promise
export default function processChildren(children, callback) {
  var data = {};
  
  React.Children.forEach(children, function (child) {
    if (child.type === Texture) {
      data.texture = {};

      if (child.props.source) {
        data.texture.source = child.props.source;
      }

      var img = new Image();
      img.src = data.texture.source;
      
      img.onload = function() {
        data.texture.originalWidth = img.width;
        data.texture.originalHeight = img.height;
        
        callback(data);
      };
    }

    if (child.props.onUpdate) {
      (data.onUpdate = data.onUpdate || []).push(child.props.onUpdate);
    }
  });
};
