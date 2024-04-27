import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <nav className='mt-4'>
            <ul className="pagination justify-content-center">
                {Array(totalPages)
                    .fill()
                    .map((_, index) => (
                        <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                            <button className="page-link" onClick={() => onPageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default Pagination;
