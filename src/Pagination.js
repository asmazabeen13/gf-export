import React from "react";

const Pagination = ({
  usersPerPage,
  totalUsers,
  currentPage,
  paginate,
  onFirstPage,
  onLastPage
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination-container">
      <li className="page-item">
        <button
          className="page-link"
          onClick={onFirstPage}
          disabled={currentPage === 1}
        >
          &#171; {/* Left arrow */}
        </button>
      </li>
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &#8249; {/* Less-than sign */}
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${currentPage === number ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          &#8250; {/* Greater-than sign */}
        </button>
      </li>
      <li className="page-item">
        <button
          className="page-link"
          onClick={onLastPage}
          disabled={currentPage === pageNumbers.length}
        >
          &#187; {/* Right arrow */}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
