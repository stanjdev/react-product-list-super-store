import React from 'react';

export default function CategoryButton({ value, onClick, className, itemCount }) {
  return <button
            value={value}
            onClick={onClick}
            className={`${className} cat-button`}>
              {value}
              <div className='qty-bubble' value={value}>{itemCount}</div>
          </button>
};

