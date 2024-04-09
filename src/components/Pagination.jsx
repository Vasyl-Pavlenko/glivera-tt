import { IconRightChevron, IconLeftChevron } from './index';

export const Pagination = ({ customersPerPage, length, handlePagination, currentPage }) => {
  const paginationNumber = [];

  for (let i = 1; i <= Math.ceil(length / customersPerPage); i++) {
    paginationNumber.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => handlePagination(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination__button"
        aria-label="Previous Page">
        <IconRightChevron />
      </button>

      {paginationNumber.map((data) => (
        <button
          key={data}
          onClick={() => handlePagination(data)}
          className={`pagination__button ${currentPage === data ? 'active' : ''}`}
          aria-label={`Page ${data}`}>
          {data}
        </button>
      ))}

      <button
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentPage === Math.ceil(length / customersPerPage)}
        className="pagination__button"
        aria-label="Next Page">
        <IconLeftChevron />
      </button>
    </div>
  );
};
