import React from 'react';

export default function Product({ id, name, price, category, units, rating }) {
  return (
    <div className='product'>
      <h2>{name}</h2>
      <p>{"⭐".repeat(Math.floor(rating))}</p>
      <p>{category}</p>
      <p className='price'>{price}</p>
      <p>Qty: {units}</p>
    </div>
  );
};
