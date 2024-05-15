import React from 'react';
import '../styles/footer.css';
import tg_logo from '../resourses/Tg_logo.svg';
import vk_logo from '../resourses/Vk_logo.svg';
const Footer = () => {
  return (
    <div className="content-footer-element">
      <div>Связь с нами: </div>
      <div className="content-footer-logo">
        <a href="https://telegram.org" target="_blank">
          <img src={tg_logo} alt="tg_image" className="content-footer-image"></img>
        </a>

        <a href="https://vk.com" target="_blank">
          <img src={vk_logo} alt="vk_image" className="content-footer-image"></img>
        </a>
      </div>
      <div>Почта: example@gmail.com </div>
    </div>
  );
};

export default Footer;
