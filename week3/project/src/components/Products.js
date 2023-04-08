import React, { useState, useMemo, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import useFetch from '../hooks/useFetch';
import Product from './Product';

export default function ProductList() {
  const { selectedCategory } = useContext(GlobalContext);
  const INITIAL_URL = 'https://fakestoreapi.com/products';
  const [url, setUrl] = useState(INITIAL_URL);
  const { data, isLoading, errorMessage } = useFetch(url);

  useMemo(() => {
    if (selectedCategory) {
      const newUrl = `${INITIAL_URL}/category/${selectedCategory}`;
      setUrl(newUrl);
    } else {
      setUrl(INITIAL_URL);
    }
  }, [selectedCategory]);

  if (errorMessage)
    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    );

  if (isLoading)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <ul className="product-list">
      {data.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </ul>
  );
}
