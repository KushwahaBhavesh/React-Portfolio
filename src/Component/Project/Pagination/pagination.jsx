import React from 'react'
import './pagination.css'

const pagination = ({ totalItems, onPageChange, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  }

  const generatePageNumbers = () => {
    const pageNumber = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumber.push(
        <li
          key={i}
          className={`pagination-item`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumber;
  }
  return <>
    <div className="pagination">
      <ul className="pagination-list">
        {generatePageNumbers()}
      </ul>
    </div>
  </>
}

export default pagination
