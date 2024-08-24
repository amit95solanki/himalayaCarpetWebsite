import React from 'react';

const ItemsPerPage = ({
  selectedPageSize,
  pageSizeOptions,
  handlePageSizeChange,
  totalCount = 0,
  currentPageIndex = 0,
}) => {
  let RowCount = 1;

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div className="d-flex" style={{ flexDirection: 'column' }}>
        {/* <label htmlFor='pageSize' className='mr-2'>
          Items per page:&nbsp;
        </label> */}
        <select
          id="pageSize"
          value={selectedPageSize}
          onChange={handlePageSizeChange}
          style={{ width: '80px' }}
          className="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light"
        >
          {pageSizeOptions.map((size) => (
            <option className="btn" key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {/* <p>Items per page</p> */}
      </div>
      <div>
        <p className="pt-2" style={{ fontWeight: '500' }}>
          Showing &nbsp;
          <span className="">
            {currentPageIndex === 0 ? RowCount : (RowCount += selectedPageSize * currentPageIndex)}
          </span>{' '}
          to <span className="">{Math.min((currentPageIndex + 1) * selectedPageSize, totalCount)}</span> of{' '}
          <span className="">{totalCount}</span> results
        </p>
      </div>
    </div>
  );
};

export default ItemsPerPage;
