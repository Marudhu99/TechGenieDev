import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardDesign from './components/CardDesign';
import SideNavbar from './components/SideNavbar';
import Pagination from './components/Pagination';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Footer from './components/Footer';

// Import JSON files for each course category
import HTMLCourses from './courses/html.json';
import CSSCourses from './courses/css.json';
import SpringBootCourses from './courses/springboot.json';
import JavaScriptCourses from './courses/javascript.json';
import ReactJsCourses from './courses/reactjs.json';
import NodeJSCourses from './courses/node_js.json';
import PythonCourses from './courses/python.json';
import DjangoCourses from './courses/django.json';
import APIDesignCourses from './courses/api_design.json';
import PostmanCourses from './courses/postman.json';
import CMDCourses from './courses/cmd.json';
import EthicalHackingCourses from './courses/ethical_hacking.json';
import DigitalMarketingCourses from './courses/digital_marketing.json';
import SEOCourses from './courses/seo.json';
import NotionCourses from './courses/notion.json';
import ShortcutsCourses from './courses/shortcuts.json';
import DeveloperToolsCourses from './courses/developer_tools.json';
import WebDesigningCourses from './courses/web_design.json';
// Import other course categories as needed

function App() {
  const [selectedCategory, setSelectedCategory] = useState('HTML');
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6); 
  // Object mapping category names to their JSON file imports
  const categoryMap = {
    HTML: HTMLCourses,
    SpringBoot: SpringBootCourses,
    CSS: CSSCourses,
    JavaScript: JavaScriptCourses,
    React: ReactJsCourses,
    "Node.js": NodeJSCourses,
    Python: PythonCourses,
    Django: DjangoCourses,
    "API Design": APIDesignCourses,
    Postman: PostmanCourses,
    CMD: CMDCourses,
    "Ethical Hacking": EthicalHackingCourses,
    "Digital Marketing": DigitalMarketingCourses,
    SEO: SEOCourses,
    Notion: NotionCourses,
    Shortcuts: ShortcutsCourses,
    "Developer Tools": DeveloperToolsCourses,
    "Web Designing": WebDesigningCourses,
  };

  useEffect(() => {
    // Load courses based on selected category
    function fetchCourses() {
      const selectedCourses = categoryMap[selectedCategory] || [];
      setCourses(selectedCourses);
    }
    setCurrentPage(1); // Reset currentPage to 1 whenever selectedCategory changes
    fetchCourses();
  }, [selectedCategory]);

  // Calculate pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = courses.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(courses.length / cardsPerPage);

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app">
      <div className="container-fluid">
        <Header title="TECH GENIE DEV"/>
        <div className="row">
          <div className="col-lg-3 col-xl-3 col-xxl-2 sideNavBar">
            <SideNavbar />
          </div>
          <div className="col-md-9 col-xxl-10 cardDesign">
            <Category onSelectCategory={setSelectedCategory} />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 mt-3">
              {currentCards.map((course, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                  <CardDesign
                    title={course.title}
                    imageName={course.imageName}
                    imagePath={course.imagePath}
                    description={course.description}
                    website_name={course.website_name}
                  />
                </div>
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
