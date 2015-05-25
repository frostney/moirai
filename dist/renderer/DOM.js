'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var DOMRenderer = {
  context: null,
  renderGameObject: function renderGameObject(data) {
    var styles = {
      position: 'absolute',
      x: data.x || 0,
      y: data.y || 0
    };

    if (data.texture) {
      styles.backgroundImage = data.texture.source;
      styles.backgroundRepeat = 'no-repeast';
    }

    return React.createElement('div', { className: 'gameObject', style: styles });
  }
};

exports['default'] = DOMRenderer;
module.exports = exports['default'];
//# sourceMappingURL=DOM.js.map