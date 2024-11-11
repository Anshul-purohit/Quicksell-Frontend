import React from 'react';

function LoadingSpinner({ isFullscreen = true }) {
  const styles = {
    container: {
      height: isFullscreen ? 'calc(100vh - 60px)' : '100%',
      width: isFullscreen ? '100vw' : '100%',
      display: 'grid',
      placeItems: 'center',
    },
    text: {
      
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.text}>Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
