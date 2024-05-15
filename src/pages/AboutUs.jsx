import React, { useContext } from 'react';
import AboutUsComponent from '../components/AboutUs/AboutUsComponent';
import '../styles/aboutStyle.css';
import { Context } from '..';
import ProductService from '../Services/productService';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const AboutUs = () => {
  const { productStore } = useContext(Context);

  async function getProduct() {
    try {
      console.log('Отправка запроса...');
      const response = await ProductService.getProduct();
      console.log('Ответ получен:', response.data);
      productStore.setProducts(response.data);
    } catch (e) {
      console.error('Ошибка при получении данных:', e);
    }
  }

  return (
    <div className="body-content">
      <AboutUsComponent />
      <Button onClick={getProduct}>Получить продукт</Button>
      {productStore.products && productStore.products.length > 0 ? (
        productStore.products.map((product) => <div key={product.id}>{product.productName}</div>)
      ) : (
        <div>Продукты не найдены</div>
      )}
    </div>
  );
};

export default observer(AboutUs);
