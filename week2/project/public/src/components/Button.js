import React from 'react';

export default function Button({
  category,
  selectedCategory,
  setSelectedCategory,
}) {
  const clickHandler = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };
  return (
    <button
      onClick={() => clickHandler(category)}
      className={selectedCategory === category ? 'active' : 'inactive'}
      value={category}
    >
      {category}
    </button>
  );
}
