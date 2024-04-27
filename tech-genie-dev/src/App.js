import React, { useState } from 'react';
import Header from './components/Header';
import CardDesign from './components/CardDesign';
import SideNavbar from './components/SideNavbar';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import SocialMediaIcons from './components/SocialMediaIcons';
import Footer from './components/Footer';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img7.jpeg';
import img7 from './images/img14.jpeg';
import img8 from './images/img12.jpeg';

const cardData = [
  {
    title: 'Card 1',
    imageName: img1,
    description: 'This is for HTML course you can learn in few hours',
    category: 'HTML',
  },
  {
    title: 'Card 2',
    imageName: img2,
    description: 'This is the description for Card 2.',
    category: 'HTML',
  },
  {
    title: 'Card 3',
    imageName: img3,
    description: ' nfogidnfgpoidf fgoidfngoi',
    category: 'HTML',
  },
  {
    title: 'Card 4',
    imageName: img4,
    description: 'This is the description for Card 3.',
    category: 'HTML',
  },
  {
    title: 'Card 5',
    imageName: img5,
    description: 'This is the description for Card 4.',
    category: 'HTML',
  },
  {
    title: 'Card 6',
    imageName: img6,
    description: 'This is the description for Card 5.',
    category: 'HTML',
  },
  {
    title: 'Card 7',
    imageName: img7,
    description: 'This is the description for Card 6.',
    category: 'HTML',
  },
  {
    title: 'Card 8',
    imageName: img8,
    description: 'This is the description for Card 6.',
    category: 'HTML',
  },
  {
    title: 'Card 8',
    imageName: img8,
    description: 'This is the description for Card 6.',
    category: 'HTML',
  },
  {
    title: 'Card 7',
    imageName: img7,
    description: 'This is the description for Card 6.',
    category: 'SpringBoot',
  },
  {
    title: 'Card 8',
    imageName: img8,
    description: 'This is the description for Card 6.',
    category: 'CSS',
  },
  {
    title: 'Card 8',
    imageName: img8,
    description: 'This is the description for Card 6.',
    category: 'CSS',
  },
  // Add more card data as needed
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('HTML');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filteredCards = selectedCategory === 'All' ? cardData : cardData.filter(card => card.category === selectedCategory);
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app">
      <div className="container-fluid">
        <Header title="TECH GENIE DEV" className="header"/>
        <div className="row">
          <div className="col-md-2 sideNavBar">
            <SideNavbar />
          </div>
          <div className="col-md-10 cardDesign">
            <Category onSelectCategory={handleCategorySelect} />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 mt-3">
              {currentCards.map((cardData, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                  <CardDesign
                    title={cardData.title}
                    imageName={cardData.imageName}
                    description={cardData.description}
                  />
                </div>
              ))}
            </div>
            {filteredCards.length > cardsPerPage && (
              <nav className='mt-4'>
                <ul className="pagination justify-content-center">
                  {Array(Math.ceil(filteredCards.length / cardsPerPage))
                    .fill()
                    .map((_, index) => (
                      <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                        <button className="page-link" onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </button>
                      </li>
                    ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
