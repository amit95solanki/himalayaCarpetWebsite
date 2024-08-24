import React from 'react';
import { useDispatch } from 'react-redux';

export const RenderPagination = ({
  totalCount,
  gotoPage,
  pageIndex,
  pageSize,
  UIProps,
  actions,
  setCurrentPageIndex,
  currentPageIndex,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const dispatch = useDispatch();

  const getPageNumbers = () => {
    const maxPagesToShow = 3;
    const currentPage = currentPageIndex + 1;

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = [];
    const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
    pages.push(startPage);

    if (startPage > 1) {
      if (startPage > 2) {
        pages.unshift(null); // Add ellipsis if there are more pages before the current range
      }
      pages.unshift(1); // Always show the first page
    }

    for (let i = startPage + 1; i <= endPage; i += 1) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(null); // Add ellipsis if there are more pages after the current range
      }
      pages.push(totalPages); // Always show the last page
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePageClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
    const newQueryParams = { ...UIProps.queryParams, pageNumber: pageIndex + 1 };
    dispatch(actions.fetchItems(newQueryParams));
    UIProps.setQueryParams(newQueryParams);
    gotoPage(pageIndex);
  };

  const handlePreviousPage = () => {
    const previousPageIndex = currentPageIndex - 1;
    if (previousPageIndex >= 0) {
      handlePageClick(previousPageIndex);
    }
  };

  const handleNextPage = () => {
    const nextPageIndex = currentPageIndex + 1;
    if (nextPageIndex < totalPages) {
      handlePageClick(nextPageIndex);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPageIndex === 0 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(0)} disabled={currentPageIndex === 0}>
            {'<<'}
          </button>
        </li>
        <li className={`page-item ${currentPageIndex === 0 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePreviousPage()} disabled={currentPageIndex === 0}>
            {'<'}
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li
            key={page ?? 'ellipsis'}
            className={`page-item ${page} ${currentPageIndex === (page ?? 1) - 1 ? 'active' : ''}`}
          >
            {page ? (
              <button className="page-link" onClick={() => handlePageClick(page - 1)}>
                {page}
              </button>
            ) : (
              <span className="page-link">...</span>
            )}
          </li>
        ))}
        <li className={`page-item ${currentPageIndex === totalPages - 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handleNextPage()} disabled={currentPageIndex === totalPages - 1}>
            {'>'}
          </button>
        </li>
        <li className={`page-item ${currentPageIndex === totalPages - 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageClick(totalPages - 1)}
            disabled={currentPageIndex === totalPages - 1}
          >
            {'>>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};
