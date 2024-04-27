import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faFileAlt, faBookOpen, faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/sideNavbar_new.css';

const SideNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    { id: 'home', text: 'Home', icon: faHome, order: 4 },
    { id: 'courses', text: 'Courses', icon: faBook, order: 3 },
    { id: 'ebooks', text: 'E-Books', icon: faFileAlt, order: 2 },
    { id: 'learning', text: 'Learning Resources', icon: faBookOpen, order: 1 },
  ];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleClick = (link) => {
    setActiveLink(link.id);
    console.log(link.id);
  };

  return (
    <div className="sidebar main_box">
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`collapse navbar-collapse sidebar_menu ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto flex-column menu">
            {links.map((link) => (
              <li
                key={link.id}
                className={`nav-item ${activeLink === link.id ? 'active' : ''}`}
                style={{ '--i': link.order }} // Use order for custom styling
              >
                <a className="nav-link" href="#" onClick={() => handleClick(link)}>
                  <FontAwesomeIcon icon={link.icon} className="me-2" />
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
