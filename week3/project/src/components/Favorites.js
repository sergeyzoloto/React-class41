import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { GlobalContext } from '../GlobalContext';
import { useContext } from 'react';

export default function FavoriteList() {
  const INITIAL_URL = 'https://fakestoreapi.com/products';
  const { favorites, removeAllFavorites } = useContext(GlobalContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  useMemo(() => {
    const urls = favorites.map((id) => {
      return `${INITIAL_URL}/${id}`;
    });

    (async () => {
      setIsLoading(true);
      let results = [];
      try {
        for (let i = 0; i < urls.length; i++) {
          const response = await fetch(urls[i]);
          const result = await response.json();
          results.push(result);
        }
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(`Error:${error}`);
      } finally {
        setIsLoading(false);
      }
      console.log('results:', results);
      setFavoriteProducts(results);
    })();
  }, [favorites, setFavoriteProducts]);
  console.log('favoriteProducts:', favoriteProducts);

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
        <>
          <div className="navbar">
            <button>
              <Link to="/">Back to homepage</Link>
            </button>
            <button onClick={removeAllFavorites} className="categories">
              Remove all favorites
            </button>
          </div>
          <ul className="product-list">
            {favoriteProducts.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </ul>
        </>
      );
    return <></>;
  };

  return (
    <>
      <h1>Favorites</h1>
      <Loading isLoading={isLoading} />
      <Error errorMessage={errorMessage} />
      <Page isLoading={isLoading} favoriteProducts={favoriteProducts} />
    </>
  );
}
