import React from 'react';
import '../css/HeaderWithSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faBookOpen, faTools } from '@fortawesome/free-solid-svg-icons';

const HeaderWithSidebar = ({ title, logo, sidebarItems, onSidebarItemClick }) => {
  return (
    <div className="header text-light py-2">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <div className="logo mr-3">{logo}</div>
            <div className="title">{title}</div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <nav className="navbar navbar-expand-md">
            <ul className="navbar-nav ml-auto">
              {sidebarItems.map((item, index) => (
                <li key={index} className="nav-item" onClick={() => onSidebarItemClick(item)}>
                  <span className="nav-link">
                    {item === 'Home' && <FontAwesomeIcon icon={faHome} />} {/* Home icon */}
                    {item === 'Courses' && <FontAwesomeIcon icon={faBook} />} {/* Courses icon */}
                    {item === 'E-Books' && <FontAwesomeIcon icon={faBookOpen} />} {/* E-Books icon */}
                    {item === 'Learning Resources' && <FontAwesomeIcon icon={faTools} />} {/* Learning Resources icon */}
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithSidebar;
