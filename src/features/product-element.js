import React from 'react';

const ProductElement = (props) => {
  const { product } = props;
  return (
    <div key={product.id} className="ProductItem">
      <img src={product.images[0]} />
      <h3>{product.title}</h3>
      <h5>{product.description}</h5>
    </div>
  );
};

export default ProductElement;
