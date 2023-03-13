import React from 'react';

export default function Button({
  category,
  selectedCategory,
  setSelectedCategory,
}) {
  const clickHandler = (category) => {
    if (category.target.value === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category.target.value);
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
