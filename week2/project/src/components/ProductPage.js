import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  const URL = 'https://fakestoreapi.com/products/' + id;
  const { data, isLoading, errorMessage } = useFetch(URL);
  const product = { data }.data;

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
      );
    return <></>;
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <Error errorMessage={errorMessage} />
      <Page isLoading={isLoading} product={product} />
    </>
  );
}
