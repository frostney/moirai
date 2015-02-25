import React from 'react';


var scaleHeightToFit = function() {
  var scaleFactor = 1.0;
  var height = parseInt(this.props.height, 10);
  
  console.log('height', height);
  
  if (height > this.state.containerHeight) {
    scaleFactor = this.state.containerHeight / height;
  }
  
  console.log('scaleFactor', scaleFactor);

  return scaleFactor;
};

var scaleWidthToFit = function() {
  var scaleFactor = 1.0;
  var width = parseInt(this.props.width, 10);

  if (width > this.state.containerWidth) {
    scaleFactor = this.state.containerHeight / width;
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
    
    console.log(this.state);
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
      console.log('No auto size');
      
      switch (this.props.mode) {
        case 'scaleToFit': {
          scaleFactor = Math.min(scaleWidthToFit.call(this), scaleHeightToFit.call(this));
          
          console.log('scaleFactor', scaleFactor);
          
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
