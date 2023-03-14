import { Link } from 'react-router-dom';
import React from 'react';
import Heart from './Heart';

export default function Product({ product }) {
  return (
    <li className="product-unit">
      <Heart id={product.id} />
      <Link to={'/' + product.id}>
        <div className="product">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <span className="product-title">{product.title}</span>
        </div>
      </Link>
    </li>
  );
}
