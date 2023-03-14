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

  const Loading = (props) => {
    if (isLoading) return <p>Loading...</p>;
    return <></>;
  };

  const Error = (props) => {
    if (errorMessage) return <p>{errorMessage}</p>;
    return <></>;
  };

  const Page = (props) => {
    if (!isLoading)
      return (
        <ul className="product-list">
          {data.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </ul>
      );
    return <></>;
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <Error errorMessage={errorMessage} />
      <Page isLoading={isLoading} data={data} />
    </>
  );
}
