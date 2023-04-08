import './App.css';
import { GlobalProvider } from './GlobalContext';
import NavigationBar from './components/NavigationBar';
import ProductList from './components/Products';
import ProductPage from './components/ProductPage';
import FavoriteList from './components/Favorites';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <h3>Home</h3>
      <NavigationBar />
      <ProductList />
    </>
  );
}

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ProductPage />} />
            <Route path="/favorites" element={<FavoriteList />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
