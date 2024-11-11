import React, { useState, useRef, useEffect, useCallback } from 'react';
import { LuSettings2 } from 'react-icons/lu';
import { BiChevronDown } from 'react-icons/bi';

function DisplaySettings({ category, setCategory, sortOrder, setSortOrder }) {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const handleOutsideClick = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  }, []);

  const handleCategoryChange = useCallback((e) => setCategory(e.target.value), [setCategory]);
  const handleSortOrderChange = useCallback((e) => setSortOrder(e.target.value), [setSortOrder]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const styles = {
    container: {
      position: 'relative',
    },
    settingsLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.25rem 0.5rem',
      backgroundColor: '#fff',
      borderRadius: '0.25rem',
      boxShadow: '0 0 0.25rem #12121242',
      cursor: 'pointer',
    },
    labelText: {
      color: '#282a2f',
      fontWeight: 'bold',
    },
    dropdown: {
      position: 'absolute',
      top: '2.5rem',
      padding: '1.25rem 1.5rem',
      backgroundColor: '#f8f9fb',
      borderRadius: '1rem',
      boxShadow: '0 0 0.125rem #0007',
      width: '30%',
      minWidth: '250px',
      display: isVisible ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '1rem',
    },
    dropdownRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dropdownLabel: {
      color: '#8a8b8c',
      fontWeight: 'bold',
    },
    select: {
      backgroundColor: '#fefffe',
      border: '1px solid #d8d8d8',
      borderRadius: '0.25rem',
      padding: '0.25rem 0.5rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container} ref={dropdownRef}>
      <div style={styles.settingsLabel} onClick={toggleDropdown}>
        <LuSettings2 color="#6b6f76" />
        <div style={styles.labelText}>Display</div>
        <BiChevronDown color="#6b6f76" />
      </div>
      <div style={styles.dropdown}>
        <div style={styles.dropdownRow}>
          <label style={styles.dropdownLabel}>Group By</label>
          <select value={category} onChange={handleCategoryChange} style={styles.select}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div style={styles.dropdownRow}>
          <label style={styles.dropdownLabel}>Sort By</label>
          <select value={sortOrder} onChange={handleSortOrderChange} style={styles.select}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisplaySettings;
