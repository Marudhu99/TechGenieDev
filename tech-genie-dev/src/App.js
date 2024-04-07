import React, { useState } from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import CardDesign from './components/CardDesign';
import SideNavbar from './components/SideNavbar';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img7.jpeg'
import img7 from './images/img14.jpeg'
import img8 from './images/img12.jpeg'

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
    category: 'CSS',
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
    category: 'Node.js',
  },
  {
    title: 'Card 6',
    imageName: img6,
    description: 'This is the description for Card 5.',
    category: 'Python',
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
    category: 'Django',
  },
  // Add more card data as needed
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('HTML');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = selectedCategory === 'All' ? cardData : cardData.filter(card => card.category === selectedCategory);
  return (
    <div className="app">
      <div className="container-fluid">
        <Header title="TECH GENIE DEV" />
        <div className="row">
          <div className="col-md-2 sideNavBar">
            <SideNavbar />
          </div>
          <div className="col-md-10 cardDesign">
            <Category onSelectCategory={handleCategorySelect} />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
            {filteredCards.map((cardData, index) =>(
                <div key={index} className="col">
                  <CardDesign
                    title={cardData.title}
                    imageName={cardData.imageName}
                    description={cardData.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer title="Footer component" /> */}
    </div>
  );
}

export default App;
