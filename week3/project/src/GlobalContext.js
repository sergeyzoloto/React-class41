import { createContext, useState, useEffect } from 'react';
const initialState = {
  errorMessage: null,
  isLoading: false,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [state, setState] = useState(initialState);

  function checkStorage() {
    if (localStorage.getItem('favorites')) {
      return JSON.parse(localStorage.getItem('favorites'));
    } else {
      return [];
    }
  }
  const savedFavorites = checkStorage();

  const [favorites, setFavorites] = useState(savedFavorites);

  useEffect(() => {
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

  const removeAllFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    setFavorites,
    handleFavorites,
    isFavorite,
    removeAllFavorites,
    selectedCategory,
    setSelectedCategory,
    errorMessage: state.errorMessage,
    isLoading: state.isLoading,
    setState,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
