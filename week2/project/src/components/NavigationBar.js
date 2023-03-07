import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function NavigationBar({
  selectedCategory,
  setSelectedCategory,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`,
        );
        const fetchedCategories = await response.json();
        setIsLoading(false);
        setCategories(fetchedCategories);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(error);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <>{errorMessage}</>
      ) : (
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
      )}
    </>
  );
}
