import React, { useState } from 'react';
import { mockProducts } from '../data/mockProducts';
import { Product } from '../types/product';
import './ProductList.css';

const ProductList: React.FC = () => {
  const [products] = useState<Product[]>(mockProducts);

  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1>商品列表</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-price">￥{product.price.toFixed(2)}</div>
              <div className="product-meta">
                <span>库存: {product.stock}</span>
                <span>销量: {product.sales}</span>
                <span>评分: {product.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 