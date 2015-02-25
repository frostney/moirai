import React from 'react';


var scaleHeightToFit = function() {
  var scaleFactor = 1.0;

  if (this.props.height > this.state.containerHeight) {
    scaleFactor = this.state.containerHeight / this.props.height;
  }

  return scaleFactor;
};

var scaleWidthToFit = function() {
  var scaleFactor = 1.0;

  if (this.props.width > this.state.containerWidth) {
    scaleFactor = this.state.containerHeight / this.props.width;
  }

  return scaleFactor;
};

class Viewport extends React.Component {
  constructor() {
    this.state = {
      containerWidth: 0,
      containerHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({containerWidth: window.innerWidth, containerHeight: window.innerHeight});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    var width = (this.props.width === 'auto') ? '100%' : this.props.width + 'px';
    var height = (this.props.height === 'auto') ? '100%' : this.props.height + 'px';
    
    var autoSize = (this.props.width === 'auto') && (this.props.height === 'auto');
    
    var scaleFactor = 1.0;
    
    if (!autoSize) {
      switch (this.props.mode) {
        case 'scaleToFit': {
          let scaleX = 1;
          let scaleY = 1;

          if (this.state.containerWidth < this.props.width) {
            scaleY = scaleHeightToFit.call(this);
          }

          if (this.state.containerHeight < this.props.height) {
            scaleX = scaleWidthToFit.call(this);
          }

          scaleFactor = Math.min(scaleX, scaleY);
          
          break;
        }
        case 'scaleWidthToFit': {
          scaleFactor = scaleWidthToFit.call(this);
          break;
        }
        case 'scaleHeightToFit': {
          scaleFactor = scaleHeightToFit.call(this);
          break;
        }
        default:
          break;
      }
    }
    
    var transform = `scale(${scaleFactor}, ${scaleFactor})`;

    var position = 'absolute';
    
    var style = {position, width, height, transform};
    
    if (!autoSize && this.props.center) {
      style.left = '50%';
      style.top = '50%';
      style.marginLeft = (this.props.width / (-2)) + 'px';
      style.marginTop = (this.props.height / (-2)) + 'px';
    }

    return (
      <div className="viewport" style={style}>
        {this.props.children}
      </div>
    );
  }
}

Viewport.defaultProps = {
  width: 'auto',
  height: 'auto',
  mode: 'scaleToFit',
  center: true
};

export default Viewport;
