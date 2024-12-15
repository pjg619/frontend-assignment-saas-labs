import React, { useState } from "react";
import "./pagination.css"; // For optional styling

const Pagination = ({
  totalItems,
  rowsPerPageOptions,
  handlePageChange,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      handlePageChange(currentPage + 1);
    }
  };

  const handleRowsChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <span>Rows per page:</span>
        <select value={rowsPerPage} onChange={handleRowsChange}>
          {rowsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="pagination-info">
        <span>
          {startItem}–{endItem} of {totalItems}
        </span>
      </div>
      <div className="pagination-buttons">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
