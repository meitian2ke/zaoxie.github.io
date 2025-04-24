import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="experience-page">
      <h2>经验分享</h2>
      <div className="content-section">
        <h3>用药经验</h3>
        <p>分享真实用药体验，帮助他人选择合适药品</p>
      </div>
      <div className="content-section">
        <h3>健康知识</h3>
        <p>普及医药知识，提高健康意识</p>
      </div>
      <div className="content-section">
        <h3>专家建议</h3>
        <p>专业医生指导，科学用药建议</p>
      </div>
    </div>
  );
};

export default Experience; 