import React, { useEffect, useState } from 'react';
import ProductElement from './product-element';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(30);
  const [skip, setSkip] = useState(0);
  const fetchProducts = async () => {
    let res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    let data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const listProducts = () => {
    const list = products.map((product) => {
      return <ProductElement product={product} />;
    });
    return list;
  };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Hello, Welcome to Products Page.</h1>
      <div className="ProductsList">{listProducts()}</div>
    </>
  );
};

export default Products;
