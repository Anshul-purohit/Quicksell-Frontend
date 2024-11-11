import React from 'react';

function LoadingSpinner({ isFullscreen = true }) {
  const styles = {
    container: {
      height: isFullscreen ? 'calc(100vh - 60px)' : '100%',
      width: isFullscreen ? '100vw' : '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    spinner: {
      position: 'relative',
      width: '80px',
      height: '80px',
    },
    circle: {
      position: 'absolute',
      border: '4px solid #3498db',
      opacity: 1,
      borderRadius: '50%',
      animation: 'ripple 1.5s infinite',
    },
    circle2: {
      animationDelay: '-0.5s',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner}>
        <div style={{ ...styles.circle }}></div>
        <div style={{ ...styles.circle, ...styles.circle2 }}></div>
      </div>
      {/* Inject keyframes for the ripple animation */}
      <style>
        {`
          @keyframes ripple {
            0% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 1;
            }
            100% {
              top: 0px;
              left: 0px;
              width: 72px;
              height: 72px;
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingSpinner;
