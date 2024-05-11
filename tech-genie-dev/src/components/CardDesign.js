import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../css/cardDesign.css';

const CardDesign = ({ title, imageName, description, website_name }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    if (cardElement) {
      VanillaTilt.init(cardElement, {
        glare: false,
        reverse: true,
        maxGlare: 0.15,
      });

      return () => {
        if (cardElement.vanillaTilt) {
          cardElement.vanillaTilt.destroy(); // Cleanup
        }
      };
    }
  }, []);

  // Ensure correct image path
  const imagePath = process.env.PUBLIC_URL + `/images/${imageName}`;

  return (
    <div className="card-design" ref={cardRef}>
      <img src={imagePath} className="card-image" alt={title} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a href="#" className="course_button btn btn-sm">{website_name}</a>
      </div>
    </div>
  );
};

export default CardDesign;
