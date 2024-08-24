import React from 'react';
import { HeaderProps } from 'react-table';

const CustomHeader = ({ className, title, tableProps }) => {
  const headerStyles = {
    cursor: 'pointer', // Example style
    // Add more styles as needed
  };

  // Concatenate className and any other dynamic classes as needed
  const combinedClassName = `your-custom-class ${className}`;

  return (
    <th {...tableProps.column.getHeaderProps()} className={combinedClassName} style={headerStyles}>
      {title}
    </th>
  );
};

export { CustomHeader };
