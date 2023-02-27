import React, { useEffect, useState } from 'react';
import Product from './product';
import allProducts from '../data/all-products';

export default function ProductList({ selectedCategory }) {
  const [selectedProducts, setSelectedProducts] = useState(allProducts);

  useEffect(() => {
    if (selectedCategory) {
      setSelectedProducts(
        allProducts.filter(
          (product) => product.category === selectedCategory.slice(6),
        ),
      );
    } else {
      setSelectedProducts(allProducts);
    }
  }, [selectedCategory]);

  return (
    <ul className="product-list">
      {selectedProducts.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </ul>
  );
}
