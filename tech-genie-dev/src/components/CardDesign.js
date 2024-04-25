import React, { useEffect, useRef } from 'react';
import '../css/cardDesign.css';
import VanillaTilt from 'vanilla-tilt';

const CardDesign = ({ title, imageName, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    if (cardElement) {
      VanillaTilt.init(cardElement, {
        glare: true,
        reverse: true,
        maxGlare: 0.15,
      });

      return () => {
        cardElement.vanillaTilt.destroy(); // Cleanup
      };
    }
  }, []);

  return (
    <div className="card rgb" ref={cardRef}>
      <img src={imageName} className="card-image" alt="Card" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a href="#" className="course_button btn btn-sm">Udemy Course</a>
      </div>
    </div>
  );
};

export default CardDesign;

