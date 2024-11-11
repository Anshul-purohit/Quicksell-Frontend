import React from 'react';
import DisplaySettings from './DisplaySettings';

function AppHeader({ category, setCategory, sortOrder, setSortOrder }) {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
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
