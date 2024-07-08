import React from 'react';

const RoomPaninator = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {pageNumber.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              currentPage === pageNumber ? 'active' : ''
            }`}
          >
            <button
              className={`page-link ${
                currentPage === pageNumber ? 'bg-primary text-white' : ''
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoomPaninator;
