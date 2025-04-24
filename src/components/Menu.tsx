import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <Link to="/">药神网</Link>
      </div>
      <ul className="menu-items">
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/products">商品列表</Link>
        </li>
        <li>
          <Link to="/reviews">评测文章</Link>
        </li>
        <li>
          <Link to="/about">关于我们</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu; 