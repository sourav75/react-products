import React from 'react';

const ProductElement = (props) => {
  const { product } = props;
  return (
    <div key={product.id} className="ProductItem">
      <h5>{product.description}</h5>
    </div>
  );
};

export default ProductElement;
