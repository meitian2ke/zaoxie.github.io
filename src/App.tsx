import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Experience from './pages/Experience';
import './App.css';

const Footer: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="app-footer">
      <Link to="/" className={`footer-item ${isActive('/') ? 'active' : ''}`}>
        <span className="footer-icon">🏠</span>
        <span>首页</span>
      </Link>
      <Link to="/products" className={`footer-item ${isActive('/products') ? 'active' : ''}`}>
        <span className="footer-icon">🛍️</span>
        <span>商品</span>
      </Link>
      <Link to="/experience" className={`footer-item ${isActive('/experience') ? 'active' : ''}`}>
        <span className="footer-icon">📝</span>
        <span>经验</span>
      </Link>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>药神网</h1>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
