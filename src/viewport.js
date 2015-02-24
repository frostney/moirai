import React from 'react';

var Viewport = React.createClass({
  getInitialProps: function() {
    return {
      width: 'auto',
      height: 'auto'
    }
  },
  render: function() {
    var width = (this.props.width === 'auto') ? '100%' : this.props.width + 'px';
    var height = (this.props.height === 'auto') ? '100%' : this.props.height + 'px';

    var style = {width, height};
    
    return (
      <div className="viewport" style={style}>
        {this.props.children}
      </div>
    );
  }
});

export default Viewport;
