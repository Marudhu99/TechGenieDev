import React, { useState, useEffect } from 'react';
import '../css/category.css'; // Import custom category CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card, Button, Row, Col } from 'react-bootstrap';

function Category({ categories, activeCategory, handleClick }) {
  return (
    <Row className="category-row">
      {categories.map((category, index) => (
        <Col key={index} xs={6} sm={4} md={3} lg={2} xl={2} xxl={2} className="category-col">
          <button
            type="button"
            className={`btn btn-sm btn-info p-0 w-100 h-100 ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => handleClick(category)}
          >
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/images/${category.toLowerCase()}.jpg`}
              alt={`Image for ${category}`}
              className="w-100 h-100 rounded-0"
              style={{ objectFit: 'cover' }}
            />
          </button>
        </Col>
      ))}
    </Row>
  );
}

function CategoryContainer({ onSelectCategory }) {
  const allCategories = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'SpringBoot',
    'Django',
    'API Design',
    'Postman',
    'CMD',
    'Ethical Hacking',
    'Digital Marketing',
    'SEO',
    'Notion',
    'Shortcuts',
    'Developer Tools',
    'Web Designing'
  ]; // Add more categories as needed

  const [activeCategory, setActiveCategory] = useState('HTML');
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 6;
  const totalPages = Math.ceil(allCategories.length / categoriesPerPage);
  const slicedCategories = allCategories.slice(
    (currentPage - 1) * categoriesPerPage,
    currentPage * categoriesPerPage
  );

  const handleClick = (category) => {
    onSelectCategory(category);
    setActiveCategory(category); // Set active category directly
  };

  useEffect(() => {
    console.log('Updated Active Category:', activeCategory);
  }, [activeCategory]); // Dependency array for activeCategory

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const categoryRows = [];
  for (let i = 0; i < totalPages; i++) {
    categoryRows.push(
      <Category
        key={i}
        categories={slicedCategories}
        activeCategory={activeCategory}
        handleClick={handleClick}
      />
    );
  }

  return (
    <div className="category-container text-center">
      {categoryRows[currentPage - 1]}
      {totalPages > 1 && (
        <div className="pagination-buttons mt-3">
          <Button
            variant="outline-primary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </Button>
          <Button
            variant="outline-primary"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default CategoryContainer;
