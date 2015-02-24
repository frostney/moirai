import React from 'react';

var Viewport = React.createClass({
  getInitialProps: function() {
    return {
      width: 'auto',
      height: 'auto'
    }
  },
  render: function() {
    var width = 'width: ' + ((this.props.width === 'auto') ? '100%' : this.props.width + 'px');
    var height = 'height: ' + ((this.props.height === 'auto') ? '100%' : this.props.height + 'px');

    return (
      <div className="viwport" style="{width}; {height}"></div>
    );
  }
});

export default Viewport;