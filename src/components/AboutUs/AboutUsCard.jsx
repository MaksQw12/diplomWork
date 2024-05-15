import React, { useState } from 'react';
import '../../styles/aboutUsStyle/aboutUsCardStyle.css';

const AboutUsCard = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-card-element">
      <h1 className="title-text">{title}</h1>
      <button onClick={toggleOpen} className="about-buton">
        ⬇
      </button>
      {isOpen && <p className="about-text">{text}</p>}
    </div>
  );
};

export default AboutUsCard;
