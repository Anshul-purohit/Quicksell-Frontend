import React, { useMemo, useState, useEffect } from 'react';
import BoardColumn from './BoardColumn';

function BoardGrid({ data, category, userLookup }) {
  const groupKeys = useMemo(() => Object.keys(data), [data]);

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

  const getGridTemplateColumns = () => {
    if (windowWidth > 1200) return 'repeat(5, 1fr)';
    if (windowWidth > 900) return 'repeat(4, 1fr)';
    if (windowWidth > 600) return 'repeat(3, 1fr)';
    if (windowWidth > 400) return 'repeat(2, 1fr)';
    return '1fr';
  };

  const styles = {
    grid: {
      minHeight: 'calc(100vh - 60px)',
      backgroundColor: '#f4f5f8',
      display: 'grid',
      gridTemplateColumns: getGridTemplateColumns(),
      gap: '2rem',
      padding: '1rem 2rem',
    },
  };

  return (
    <div style={styles.grid}>
      {groupKeys.map((key) => (
        <BoardColumn
          key={key}
          items={data[key]}
          category={category}
          groupKey={key}
          userLookup={userLookup}
        />
      ))}
    </div>
  );
}

export default BoardGrid;
