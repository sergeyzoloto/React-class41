import './App.css';
import { GlobalProvider } from './GlobalContext';
import NavigationBar from './components/NavigationBar';
import ProductList from './components/Products';
import ProductPage from './components/ProductPage';
import FavoriteList from './components/Favorites';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const Application = (
    <div className="App">
      <h1>Products</h1>
      <NavigationBar />
      <ProductList />
    </div>
  );

  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={Application} />
            <Route path="/:id" element={<ProductPage />} />
            <Route path="/favorites" element={<FavoriteList />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
