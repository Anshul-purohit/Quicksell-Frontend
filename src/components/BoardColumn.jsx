import React, { useMemo } from 'react';
import TicketCard from './TicketCard';
import { GrAdd } from 'react-icons/gr';
import { LuMoreHorizontal } from 'react-icons/lu';
import { fetchPriorityIcon, fetchStatusIcon } from '../utils/Helper.jsx';
import UserIcon from './UserIcon';

function BoardColumn({ items, category, groupKey, userLookup }) {
  const columnTitle = useMemo(() => {
    if (category === 'status' || category === 'priority') return groupKey;
    if (category === 'user') return userLookup[groupKey].name;
  }, [category, groupKey, userLookup]);

  const columnIcon = useMemo(() => {
    if (category === 'status') return fetchStatusIcon(groupKey);
    if (category === 'priority') return fetchPriorityIcon(groupKey);
    if (category === 'user') {
      const user = userLookup[groupKey];
      return <UserIcon name={user.name} available={user.available} />;
    }
  }, [category, groupKey, userLookup]);

  const styles = {
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    columnHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0.5rem',
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    columnName: {
      fontSize: '12px',
      textTransform: 'capitalize',
    },
    itemCount: {
      marginLeft: '0.5rem',
      color: '#6b6f76',
    },
    cardsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
  };

  return (
    <div style={styles.column}>
      <div style={styles.columnHeader}>
        <div style={styles.headerLeft}>
          {columnIcon}
          <div style={styles.columnName}>
            {columnTitle}
            <span style={styles.itemCount}>{items.length}</span>
          </div>
        </div>
        <div style={styles.headerRight}>
          <GrAdd color="#797d84" size={12} />
          <LuMoreHorizontal color="#797d84" size={14} />
        </div>
      </div>
      <div style={styles.cardsList}>
        {items.map((item) => (
          <TicketCard
            key={item.id}
            item={item}
            userInfo={userLookup[item.userId]}
            isStatusIconHidden={category === 'status'}
            isUserIconHidden={category === 'user'}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardColumn;
