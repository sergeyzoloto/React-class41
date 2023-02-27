import React from 'react';

export default function Button({
  category,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <button
      onClick={(event) => {
        const target = event.target.outerText;
        if (target === selectedCategory) {
          setSelectedCategory('');
        } else {
          setSelectedCategory(target);
        }
      }}
      className={selectedCategory === category ? 'active' : 'inactive'}
    >
      {category}
    </button>
  );
}
