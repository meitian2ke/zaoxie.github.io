import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h2>首页</h2>
      <div className="content-section">
        <h3>热门商品</h3>
        <p>精选优质药品，品质保证，价格实惠</p>
      </div>
      <div className="content-section">
        <h3>最新经验</h3>
        <p>分享用药经验，交流健康知识</p>
      </div>
    </div>
  );
};

export default Home; 