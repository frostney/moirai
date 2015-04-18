import React from 'react';

class Texture extends React.Component {
  render() {
    return null;
  }
}

Texture.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

Texture.defaultProps = {
  x: 0,
  y: 0,
  width: 'auto',
  height: 'auto'
};

export default Texture;
