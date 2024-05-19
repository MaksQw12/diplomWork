import '../../styles/itemComponent.css';
import ItemCartComponent from './itemCartComponent';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import ProductService from '../../Services/productService';
import { Context } from '../..';
const ItemComponent = () => {
  const { productStore } = useContext(Context);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getProduct();
        productStore.setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="content-body-item-product">
      {productStore.products.map((res) => (
        <ItemCartComponent
          key={res.id}
          title={res.productName}
          price={res.price}
          image={res.image}
        />
      ))}
    </div>
  );
};
export default observer(ItemComponent);
