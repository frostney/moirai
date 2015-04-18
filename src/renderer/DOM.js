const DOMRenderer = {
  context: null,
  renderGameObject(data) {
    var styles = {
      position: 'absolute',
      x: data.x || 0,
      y: data.y || 0
    };
    
    if (data.texture) {
      styles.backgroundImage = data.texture.source;
      styles.backgroundRepeat = 'no-repeast';
    }
    
    return (
      <div className="gameObject" style={styles}></div>
    )
  }
};

export default DOMRenderer;
