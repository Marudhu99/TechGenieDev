import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/socialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social_media">
      <a href="https://www.instagram.com/techgeniedev/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.youtube.com/@TechGenieDev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="https://www.facebook.com/profile.php?id=100088374507339&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://github.com/Marudhu99" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  );
}

export default SocialMediaIcons;
