import React, { useMemo } from 'react';

function UserIcon({ name, available }) {
  const initials = useMemo(() => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('');
  }, [name]);

  const styles = {
    container: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      fontSize: '0.5rem',
      height: '1rem',
      width: '1rem',
      backgroundColor: '#2b963a',
      color: '#fff',
      borderRadius: '50%',
    },
    statusIndicator: {
      position: 'absolute',
      bottom: '-0.125rem',
      right: '-0.125rem',
      border: '1px solid #fff',
      backgroundColor: available ? '#e8b602' : '#dfe1e4',
      height: '0.25rem',
      width: '0.25rem',
      borderRadius: '50%',
    },
  };

  return (
    <div style={styles.container}>
      <div>{initials}</div>
      <div style={styles.statusIndicator}></div>
    </div>
  );
}

export default UserIcon;
