import React from 'react';
import { ActionColumnFormatter, CustomActionsColumnFormatter } from './column-formatters';

const ActionCell = ({ actionColumnsFormatter, ...props }) => {
  const renderActionCell = () => {
    if (actionColumnsFormatter === 'CustomActionsColumnFormatter') {
      return <CustomActionsColumnFormatter {...props} />;
    }
    return <ActionColumnFormatter {...props} />;
  };

  return renderActionCell();
};

export default ActionCell;
