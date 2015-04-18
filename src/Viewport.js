import React from 'react';


var scaleHeightToFit = function() {
  var scaleFactor = 1.0;
  var height = this.props.height;
  
  if (height > this.state.containerHeight) {
    scaleFactor = this.state.containerHeight / height;
  }
  
  return scaleFactor;
};

var scaleWidthToFit = function() {
  var scaleFactor = 1.0;
  var width = this.props.width;

  if (width > this.state.containerWidth) {
    scaleFactor = this.state.containerHeight / width;
  }

  return scaleFactor;
};

class Viewport extends React.Component {
  constructor(props) {
    super(props);
    
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
    var autoSize = false;
    var scaleFactor = 1.0;
    
    switch (this.props.mode) {
      case 'scaleToFit': {
        scaleFactor = Math.min(scaleWidthToFit.call(this), scaleHeightToFit.call(this));
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
      case 'fill':
        autoSize = true;
      default:
        break;
    }
    
    var width = this.props.width + 'px';
    var height = this.props.height + 'px';
    
    if (autoSize) {
      width = '100%';
      height = '100%';
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
  width: 800,
  height: 480,
  mode: 'scaleToFit',
  center: true
};

Viewport.propTypes = {
  width: React.PropTypes.number.required,
  height: React.PropTypes.number.required,
  mode: React.PropTypes.string.required,
  center: React.PropTypes.bool.required
};

export default Viewport;
