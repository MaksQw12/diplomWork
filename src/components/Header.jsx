import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="content-head">
      <div className="head-content-first">
        <Link to="/" className="text-head-content-first">
          Текстиль
        </Link>
      </div>

      <div className="head-content-second">
        <Link to="/items" className="text-head-content-second">
          Товары
        </Link>
        <Link to="/cart" className="text-head-content-second">
          Корзина
        </Link>
        <Link to="/profile" className="text-head-content-second">
          Профиль
        </Link>
        <Link to="/about" className="text-head-content-second">
          О нас
        </Link>
      </div>
    </div>
  );
};

export default Header;
