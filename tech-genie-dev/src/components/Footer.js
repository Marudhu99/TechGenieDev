import React from 'react';
import '../css/footer.css';
import '../css/sideNavbar.css';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="row align-items-center">
          <div className='col-md-4'></div>
          <div className="col-md-6 d-flex justify-content-center">
            {/* Add website copyright information here */}
            <p className="mb-0">&copy; {new Date().getFullYear()} Tech Genie Dev. All rights reserved!</p>
          </div>
          <div className="col-md-2 d-flex justify-content-end">
            <SocialMediaIcons />
          </div>
        </div>
    </footer>
  );
};

export default Footer;
