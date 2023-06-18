import React, { useEffect, useState } from 'react';
import ProductElement from './product-element';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [products]);
  const listProducts = () => {
    const list = products.map((product) => {
      return (
        <div>
          <ProductElement product={product} />
        </div>
      );
    });
    return list;
  };
  return (
    <>
      <h3>Hello, Welcome to Products Page.</h3>
      {products && listProducts()}
    </>
  );
};

export default Products;
