import React, { useState, useEffect } from 'react';
import '../css/category.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Category({ onSelectCategory }) {
    const categories = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'SpringBoot',
        'Django', 'API Design', 'Postman', 'CMD', 'Ethical Hacking', 'Digital Marketing',
        'SEO', 'Notion'
    ]; // Add more categories as needed

    const itemsPerRow = 8; // Define the number of categories per row

    const [activeCategory, setActiveCategory] = useState('HTML');

    const handleClick = (category) => {
        onSelectCategory(category);
        setActiveCategory((prevCategory) => {
            console.log('Clicked Category:', category);
            console.log('New Active Category:', category);
            console.log('Previous Active Category:', prevCategory);
            return category; // Return the new category value
        });
    };
    

    useEffect(() => {
        console.log('Updated Active Category:', activeCategory);
    }, [activeCategory]); // Add activeCategory to the dependency array

    const rows = Math.ceil(categories.length / itemsPerRow); // Calculate the number of rows

    const categoryRows = Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} className="row category">
            {categories.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow).map((category, index) => (
                <div key={index} className="col-md-3 mb-3 course">
                    <button
                        type="button"
                        className={`btn btn-outline-primary w-100 ${category === activeCategory ? 'active' : ''}`}
                        onClick={() => handleClick(category)}
                    >
                        {category}
                    </button>
                </div>
            ))}
        </div>
    ));

    return (
        <div className="container">
            {categoryRows}
        </div>
    );
}

export default Category;
