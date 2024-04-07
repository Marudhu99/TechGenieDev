import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/sideNavbar.css';
import SocialMediaIcons from './SocialMediaIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faFileAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const SideNavbar = () => {
    const links = [
        { id: 'home', text: 'Home', icon: faHome },
        { id: 'courses', text: 'Courses', icon: faBook },
        { id: 'ebooks', text: 'E-Books', icon: faFileAlt },
        { id: 'learning', text: 'Learning Resources', icon: faBookOpen },
    ];

    const [activeLink, setActiveLink] = useState('home');

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
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse sidebar_menu" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto flex-column menu">
                        {links.map((link) => (
                            <li key={link.id} className={`nav-item ${activeLink === link.id ? 'active' : ''}`}>
                                <a className="nav-link" href="#" onClick={() => handleClick(link)}>
                                    <FontAwesomeIcon icon={link.icon} className="me-2" />
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <SocialMediaIcons />
                </div>
            </nav>
        </div>
    );
};

export default SideNavbar;
