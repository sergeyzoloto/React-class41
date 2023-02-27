import React from 'react';
import categories from '../data/all-categories';
import Button from './button';

export default function Bar({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories">
      {categories.map((category, index) => {
        return (
          <Button
            key={index}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      })}
    </div>
  );
}
