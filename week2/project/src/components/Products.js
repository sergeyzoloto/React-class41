import React, { useState, useEffect } from 'react';
import Product from './Product';

export default function ProductList({ selectedCategory }) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedProducts, setSelectedProducts] = useState();

  async function getAllProducts() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const fetchedProducts = await response.json();
      setIsLoading(false);
      setSelectedProducts(fetchedProducts);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      if (selectedCategory) {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`,
          );
          const fetchedProducts = await response.json();
          setIsLoading(false);
          setSelectedProducts(fetchedProducts);
        } catch (error) {
          setErrorMessage(error);
        }
      } else {
        getAllProducts();
      }
    })();
  }, [selectedCategory]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <>{errorMessage}</>
      ) : (
        <ul className="product-list">
          {selectedProducts.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </ul>
      )}
    </>
  );
}
