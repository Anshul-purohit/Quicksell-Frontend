import React, { useMemo } from 'react';
import BoardColumn from './BoardColumn';

function BoardGrid({ data, category, userLookup }) {
  const groupKeys = useMemo(() => Object.keys(data), [data]);

  const styles = {
    grid: {
      minHeight: 'calc(100vh - 60px)',
      backgroundColor: '#f4f5f8',
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
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
