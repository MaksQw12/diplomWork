import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/main.css';
import carousel_logo1 from '../resourses/slider_1.jpg';
import carousel_logo2 from '../resourses/slider_2.jpg';
import carousel_logo3 from '../resourses/slider_3.jpg';
const Main = () => {
  return (
    <div className="content-main">
      <Carousel data-bs-theme="dark" className="content-carousel">
        <Carousel.Item>
          <img
            width="600px"
            height="600px"
            className="d-block w-100"
            src={carousel_logo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Скидки до 25%</p>
            <p>Каждую пятницу</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="600px"
            height="600px"
            className="d-block w-100"
            src={carousel_logo2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>Весенняя одежда</p>
            <p>Новый весенний look</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="600px"
            height="600px"
            className="d-block w-100"
            src={carousel_logo3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>Работаем без выходных</p>
            <p>С понедельника по пятницу с 8 до 22</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Main;
