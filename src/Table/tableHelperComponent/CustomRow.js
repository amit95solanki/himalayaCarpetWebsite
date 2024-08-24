import React from 'react';

const CustomRow = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      const className =
        cell.column.id === 'actions' || cell.column.id === 'dataStatus' ? 'text-center min-w-100px' : '';
      return (
        <td {...cell.getCellProps()} className={className}>
          {cell?.render('Cell')}
        </td>
      );
    })}
  </tr>
);

export { CustomRow };
