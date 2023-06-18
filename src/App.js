import React from 'react';
import './style.css';
import Products from './features/products';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    </>
  );
}
