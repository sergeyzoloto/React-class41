import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { GlobalContext } from '../GlobalContext';
import { useContext } from 'react';

const INITIAL_URL = 'https://fakestoreapi.com/products';

export default function FavoriteList() {
  const { favorites, removeAllFavorites, isLoading, errorMessage, setState } =
    useContext(GlobalContext);

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const urls = favorites.map((id) => {
      return `${INITIAL_URL}/${id}`;
    });

    setState({ isLoading: true, errorMessage: null });

    Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json())),
    )
      .then((results) => {
        setState({ isLoading: false, errorMessage: null });
        setFavoriteProducts(results);
      })
      .catch((error) => {
        setState({ isLoading: false, errorMessage: `${error}` });
      });

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
