import React from 'react';
import { useParams } from 'react-router-dom';
import './ReviewDetail.css';

const ReviewDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="review-detail-page">
      <h1>文章详情</h1>
      <p>文章 ID: {slug}</p>
      <p>文章详情页面正在建设中...</p>
    </div>
  );
};

export default ReviewDetail; 