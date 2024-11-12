import React, { useEffect, useState, useCallback } from 'react';
import AppHeader from './components/AppHeader';
import BoardGrid from './components/BoardGrid';
import { API_ENDPOINT } from './constants';
import { prepareGridData, mapUsersById } from './utils/Helper';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [tickets, setTickets] = useState([]);
  const [userLookup, setUserLookup] = useState({});
  const [gridData, setGridData] = useState({});
  const [category, setCategory] = useState('status');
  const [sortOrder, setSortOrder] = useState('priority');
  const [isLoading, setIsLoading] = useState(true);

  const loadPreferences = useCallback(() => {
    setCategory(localStorage.getItem('category') || 'status');
    setSortOrder(localStorage.getItem('sortOrder') || 'priority');
  }, []);

  const savePreferences = useCallback((preferences) => {
    Object.keys(preferences).forEach((key) => {
      localStorage.setItem(key, preferences[key]);
    });
  }, []);

  useEffect(() => {
    loadPreferences();
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const { tickets, users } = data;
        setTickets(tickets);
        setUserLookup(mapUsersById(users));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [loadPreferences]);

  useEffect(() => {
    if (tickets.length === 0) return;
    setGridData(prepareGridData(tickets, category, sortOrder));
    setIsLoading(false);
  }, [category, sortOrder, tickets]);

  const handleCategoryChange = useCallback(
    (newCategory) => {
      setIsLoading(true);
      setCategory(newCategory);
      savePreferences({ category: newCategory });
    },
    [setCategory,savePreferences]
  );

  const handleSortOrderChange = useCallback(
    (newSortOrder) => {
      setIsLoading(true);
      setSortOrder(newSortOrder);
      savePreferences({ sortOrder: newSortOrder });
    },
    [setSortOrder,savePreferences]
  );

  return (
    <div>
      <AppHeader
        category={category}
        setCategory={handleCategoryChange}
        sortOrder={sortOrder}
        setSortOrder={handleSortOrderChange}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <BoardGrid data={gridData} category={category} userLookup={userLookup} />
      )}
    </div>
  );
}

export default App;
