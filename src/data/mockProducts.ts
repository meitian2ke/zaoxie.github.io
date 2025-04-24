import { Product } from '../types/product';

const categories = ['感冒药', '维生素', '止痛药', '肠胃药', '皮肤药'];
const mockImages = [
  'https://via.placeholder.com/150x150?text=Product1',
  'https://via.placeholder.com/150x150?text=Product2',
  'https://via.placeholder.com/150x150?text=Product3',
  'https://via.placeholder.com/150x150?text=Product4',
  'https://via.placeholder.com/150x150?text=Product5'
];

const generateMockProducts = (count: number): Product[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `product-${index + 1}`,
    name: `商品${index + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    description: `这是商品${index + 1}的详细描述，包含产品特点和使用说明。`,
    image: mockImages[Math.floor(Math.random() * mockImages.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    stock: Math.floor(Math.random() * 1000),
    sales: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 5) + 1
  }));
};

export const mockProducts = generateMockProducts(20); 