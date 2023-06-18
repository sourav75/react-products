import React, { useEffect, useState } from 'react';

const ProductDetails = (props) => {
  const { productId } = props;
  const [data, setData] = useState({});
  const fetchDetails = async () => {
    console.log('product id', productId);
    let res = await fetch(`https://dummyjson.com/products/${productId}`);
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="ProductDetails">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <h5>{data.price}</h5>
    </div>
  );
};

export default ProductDetails;
