import React, { useState, useEffect } from 'react';
import DisplaySettings from './DisplaySettings';

function AppHeader({ category, setCategory, sortOrder, setSortOrder }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    header: {
      display: 'flex',
      flexDirection: windowWidth < 600 ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      backgroundColor: '#fff',
      zIndex: 1,
    },
  };

  return (
    <header style={styles.header}>
      <DisplaySettings
        category={category}
        setCategory={setCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </header>
  );
}

export default AppHeader;
