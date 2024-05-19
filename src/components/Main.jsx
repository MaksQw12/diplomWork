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
            <h2 className="text-h2">Скидки до 25%</h2>
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
            <h2 className="text-h2">Весенняя одежда</h2>
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
            <h2 className="text-h2">Работаем без выходных</h2>
            <p>С понедельника по пятницу с 8 до 22</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Main;
