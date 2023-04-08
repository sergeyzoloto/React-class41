import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { GlobalContext } from '../GlobalContext';
import { useContext } from 'react';

export default function FavoriteList() {
  const INITIAL_URL = 'https://fakestoreapi.com/products';
  const { favorites, removeAllFavorites, isLoading, errorMessage, setState } =
    useContext(GlobalContext);

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useMemo(() => {
    const urls = favorites.map((id) => {
      return `${INITIAL_URL}/${id}`;
    });

    (async () => {
      setState({ isLoading: true, errorMessage: null });
      let results = [];
      try {
        for (let i = 0; i < urls.length; i++) {
          const response = await fetch(urls[i]);
          const result = await response.json();
          results.push(result);
        }
        setState({ isLoading: false, errorMessage: null });
      } catch (error) {
        setState({ isLoading: false, errorMessage: `${error}` });
      }
      setFavoriteProducts(results);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

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
    <>
      <h1>Favorites</h1>
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
}
