import './App.css';
import NavigationBar from './components/NavigationBar';
import ProductList from './components/Products';
import ProductPage from './components/ProductPage';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const Application = (
    <div className="App">
      <h1>Products</h1>
      <NavigationBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Application} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
