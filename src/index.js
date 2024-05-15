import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import ProductStore from './mobx/productStore';
const productStore = new ProductStore();
export const Context = createContext({ productStore });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ productStore }}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>,
);
