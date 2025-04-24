import React from 'react';
import './Products.css';

const Products: React.FC = () => {
  return (
    <div className="products-page">
      <h2>商品列表</h2>
      <div className="content-section">
        <h3>感冒药</h3>
        <p>快速缓解感冒症状，提高免疫力</p>
      </div>
      <div className="content-section">
        <h3>维生素</h3>
        <p>补充日常所需营养，增强体质</p>
      </div>
      <div className="content-section">
        <h3>肠胃药</h3>
        <p>调理肠胃功能，改善消化问题</p>
      </div>
    </div>
  );
};

export default Products; 