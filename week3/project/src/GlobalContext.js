import { createContext, useState, useMemo } from 'react';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  function checkStorage() {
    if (localStorage.getItem('favorites')) {
      return JSON.parse(localStorage.getItem('favorites'));
    } else {
      return [];
    }
  }
  const savedFavorites = checkStorage();

  const [favorites, setFavorites] = useState(savedFavorites);

  useMemo(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorites = (id) => {
    if (favorites.includes(id)) {
      const newFavorites = favorites.filter((favId) => favId !== id);
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const clearFilter = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    setFavorites,
    handleFavorites,
    isFavorite,
    clearFilter,
    selectedCategory,
    setSelectedCategory,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
