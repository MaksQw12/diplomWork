import React from 'react';
import AboutUsCard from './AboutUsCard';

const AboutUsComponent = () => {
  return (
    <div className="about-content">
      <div className="about-content-items">
        <AboutUsCard
          title="Почему мы ?"
          text="
        Мы - ваш надежный партнер в мире текстильных решений. Вдохновляемся вашим комфортом и довольством, стремясь предложить самые качественные и стильные текстильные изделия для вашего дома. В каждой нити нашей работы мы стараемся привнести красоту и удобство, делая вашу жизнь ярче и комфортнее. Доверьтесь нам, и создадим вместе ваш уютный уголок."
        />
        <AboutUsCard title="Почему мы ?" text="мы стараемся фапфцуацуафцуцукпуцпкцупфуцпк" />
        <AboutUsCard title="Почему мы ?" text="мы стараемся фапфцуацуафцуцукпуцпкцупфуцпк" />
        <AboutUsCard title="Почему мы ?" text="мы стараемся фапфцуацуафцуцукпуцпкцупфуцпк" />
      </div>
    </div>
  );
};

export default AboutUsComponent;
