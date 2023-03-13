import React from 'react';
import useFetch from '../hooks/useFetch';
import Button from './Button';

export default function NavigationBar({
  selectedCategory,
  setSelectedCategory,
}) {
  const URL = 'https://fakestoreapi.com/products/categories';
  const { data, isLoading, errorMessage } = useFetch(URL);

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
        <div className="categories">
          {data.map((category, index) => {
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
