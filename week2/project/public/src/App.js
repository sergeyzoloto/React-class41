import './App.css';
import NavigationBar from './components/NavigationBar';
import ProductList from './components/Products';
import React, { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <div className="App">
      <h1>Products</h1>
      <NavigationBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
