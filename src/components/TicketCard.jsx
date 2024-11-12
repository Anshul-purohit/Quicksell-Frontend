import React, { useState, useEffect } from 'react';
import UserIcon from './UserIcon';
import { fetchStatusIcon } from '../utils/Helper.jsx';

function TicketCard({ item, userInfo, isStatusIconHidden, isUserIconHidden }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = windowWidth < 600;

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
    card: {
      borderRadius: '0.3rem',
      padding: '0.75rem 1rem',
      boxShadow: '0 0 0.5rem #12121221',
      backgroundColor: '#fff',
      height: isSmallScreen ? 'auto' : '80px',
      border: '1px solid #dce0e8',
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
      height: '30px',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 2,
      textOverflow: 'ellipsis',
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
      border: '1px solid #f3f4f5',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
    },
    tagItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      border: '1px solid #f3f4f5',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
    },
    tagDot: {
      backgroundColor: '#bec2c8',
      borderRadius: '50%',
      height: '0.75rem',
      width: '0.75rem',
      color: '#6b6f76',
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
          {/* SVG icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6.5C3.39782 6.5 3.77936 6.65804 4.06066 6.93934C4.34196 7.22064 4.5 7.60218 4.5 8C4.5 8.39782 4.34196 8.77936 4.06066 9.06066C3.77936 9.34196 3.39782 9.5 3 9.5C2.60218 9.5 2.22064 9.34196 1.93934 9.06066C1.65804 8.77936 1.5 8.39782 1.5 8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5ZM8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5ZM13 6.5C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8C14.5 8.39782 14.342 8.77936 14.0607 9.06066C13.7794 9.34196 13.3978 9.5 13 9.5C12.6022 9.5 12.2206 9.34196 11.9393 9.06066C11.658 8.77936 11.5 8.39782 11.5 8C11.5 7.60218 11.658 7.22064 11.9393 6.93934C12.2206 6.65804 12.6022 6.5 13 6.5Z"
              fill="#5C5C5E"
            />
          </svg>
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
