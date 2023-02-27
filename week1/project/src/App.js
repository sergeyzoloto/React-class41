import './App.css';
import Bar from './components/bar';
import ProductList from './components/products';
import React, { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <div className="App">
      <h1>Products</h1>
      <Bar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
