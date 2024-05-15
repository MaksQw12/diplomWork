import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../styles/aboutComponentStyle.css';
const AboutUsComponent = () => {
  return (
    <div className="content-acardion">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="acordion-item">
          <Accordion.Header>Почему мы ?</Accordion.Header>
          <Accordion.Body>тест</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="acordion-item">
          <Accordion.Header>Почему мы ?</Accordion.Header>
          <Accordion.Body>тест</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="acordion-item">
          <Accordion.Header>Почему мы ?</Accordion.Header>
          <Accordion.Body>тест</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="acordion-item">
          <Accordion.Header>Почему мы ?</Accordion.Header>
          <Accordion.Body>тест</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AboutUsComponent;
