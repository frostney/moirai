import React from 'react';

class Viewport extends React.Component {
  constructor() {
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
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
    var transform = 'scale(1.0, 1.0)';

    var style = {width, height, transform};

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
  mode: 'fit'
};

export default Viewport;
