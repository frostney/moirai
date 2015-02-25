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
    var transform = 'scale(1.0, 1.0)';
    
    var style = {width, height, transform};
    
    return (
      <div className="viewport" style={style}>
        {this.props.children}
      </div>
    );
  }
});

/*
 var WindowDimensions = React.createClass({
 render: function() {
 return <span>{this.state.width} x {this.state.height}</span>;
 },
 updateDimensions: function() {
 this.setState({width: $(window).width(), height: $(window).height()});
 },
 componentWillMount: function() {
 this.updateDimensions();
 },
 componentDidMount: function() {
 window.addEventListener("resize", this.updateDimensions);
 },
 componentWillUnmount: function() {
 window.removeEventListener("resize", this.updateDimensions);
 }
 });

 */

export default Viewport;
