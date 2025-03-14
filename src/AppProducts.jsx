import React, { useState } from 'react'
import './App.css';
import Products from './components/Products'

export default function AppProducts() {
    const [showProducts, setshowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products/>}
      <button onClick={() => setshowProducts((show) => !show)}>Toggle</button>
    </div>
  )
}
