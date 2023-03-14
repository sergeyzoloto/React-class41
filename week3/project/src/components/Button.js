import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

export default function Button({ category }) {
  const { selectedCategory, setSelectedCategory } = useContext(GlobalContext);

  const clickHandler = (event) => {
    if (event.target.value === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(event.target.value);
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={selectedCategory === category ? 'active' : 'inactive'}
      value={category}
    >
      {category}
    </button>
  );
}
