import React from 'react';
import UserIcon from './UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { fetchStatusIcon } from '../utils/Helper.jsx';

function TicketCard({ item, userInfo, isStatusIconHidden, isUserIconHidden }) {
  const styles = {
    card: {
      borderRadius: '0.5rem',
      padding: '0.75rem 1rem',
      boxShadow: '0 0 0.5rem #12121221',
      backgroundColor: '#fff',
    },
    headerSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ticketNumber: {
      color: '#6b6f76',
      fontSize: '0.6rem',
      fontWeight: 'bold',
    },
    bodySection: {
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      marginTop: '0.5rem',
    },
    ticketTitle: {
      color: '#282a2f',
      fontSize: '0.75rem',
      fontWeight: 'bold',
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginTop: '0.5rem',
    },
    moreOptions: {
      display: 'grid',
      placeItems: 'center',
      border: '1px solid #edeff2',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
    },
    tagItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      border: '1px solid #edeff2',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
    },
    tagDot: {
      backgroundColor: '#bec2c8',
      borderRadius: '50%',
      height: '0.75rem',
      width: '0.75rem',
    },
    tagLabel: {
      color: '#6b6f76',
      fontSize: '0.75rem',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerSection}>
        <div style={styles.ticketNumber}>{item.id}</div>
        {!isUserIconHidden && (
          <UserIcon name={userInfo.name} available={userInfo.available} />
        )}
      </div>
      <div style={styles.bodySection}>
        {!isStatusIconHidden && fetchStatusIcon(item.status)}
        <div style={styles.ticketTitle}>{item.title}</div>
      </div>
      <div style={styles.footerSection}>
        <div style={styles.moreOptions}>
          <LuMoreHorizontal color="#797d84" />
        </div>
        {item.tag.map((label) => (
          <div key={label} style={styles.tagItem}>
            <div style={styles.tagDot}></div>
            <div style={styles.tagLabel}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketCard;
