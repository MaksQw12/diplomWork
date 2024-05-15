import { makeAutoObservable } from 'mobx';
import ProductService from '../Services/productService';

export default class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }
}
