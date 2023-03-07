import React from 'react';
import Product from './Product';
import { allProducts } from '../data/all-products';

export default function ProductList({ selectedCategory }) {
  let selectedProducts = allProducts;

  if (selectedCategory !== '') {
    selectedProducts = allProducts.filter(
      (product) => product.category === selectedCategory.slice(6),
    );
  }

  return (
    <ul className="product-list">
      {selectedProducts.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </ul>
  );
}
