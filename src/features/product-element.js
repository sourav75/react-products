import React, { useState } from 'react';
import ProductDetails from './product-details';
import { Link } from 'react-router-dom';

const ProductElement = (props) => {
  const { product } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((data) => !data);
  };
  return (
    // <Link to="/product">
    <div key={product.id} className="ProductItem" onClick={handleClick}>
      <img src={product.images[0]} />
      <h3>{product.title}</h3>
      <h5>{product.description}</h5>
      {show && <ProductDetails productId={product.id} />}
    </div>
    // </Link>
  );
};

export default ProductElement;
