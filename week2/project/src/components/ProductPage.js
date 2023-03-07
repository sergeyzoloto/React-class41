import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/' + id);
        const fetchedProduct = await response.json();
        setIsLoading(false);
        setProduct(fetchedProduct);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(error);
      }
    })();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <>{errorMessage}</>
      ) : (
        <>
          <div className="product-page">
            <h1 className="product-title">{product.title}</h1>
            <p>{product.description}</p>
            <p>
              Price: {product.price}
              {}
            </p>
            <p>
              Rating: {product.rating.rate} based on {product.rating.count}{' '}
              reviews
              {}
            </p>

            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </div>
        </>
      )}
    </>
  );
}
