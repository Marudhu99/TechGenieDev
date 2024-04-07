import React, { useState, useEffect } from 'react';
import '../css/category.css'; // Import custom category CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Category({ onSelectCategory }) {
  const categories = [
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

  const handleClick = (category) => {
    onSelectCategory(category);
    setActiveCategory(category); // Set active category directly
  };

  useEffect(() => {
    console.log('Updated Active Category:', activeCategory);
  }, [activeCategory]); // Dependency array for activeCategory

  const categoryRow = (
    <div className="category-row d-flex flex-wrap">
      {categories.map((category, index) => (
        <div key={index} className="category-item col-md-2">
          <button
            type="button"
            className={`btn btn-sm btn-outline-primary w-100 ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="category-container">
      {categoryRow}
    </div>
  );
}

export default Category;
