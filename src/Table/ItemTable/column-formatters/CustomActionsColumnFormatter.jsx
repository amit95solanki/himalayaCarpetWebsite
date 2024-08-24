import React from 'react';
import { Tooltip, IconButton, Switch } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UserIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

export const CustomActionsColumnFormatter = ({
  cellContent,
  row,
  rowIndex,
  pageName,
  PageNameKey,
  openCloneItemDialog,
  openUpdateItemsStatusDialog,
  openEditItemPage,
  openDeleteItemDialog,
  openRoleAssignmentPage,
  showUpdateStatusBtn,
}) => {
  let Status = false;
  if (showUpdateStatusBtn && row.status) {
    Status = row.status.toLowerCase() !== 'inactive';
  }

  return (
    <>
      <Tooltip title={`Edit ${pageName}`}>
        <IconButton size="small" onClick={() => openEditItemPage(row.id)}>
          <EditIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Assign to Institute">
        <IconButton size="small" onClick={() => openRoleAssignmentPage(row.id)}>
          <UserIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title={`Delete ${pageName}`}>
        <IconButton size="small" onClick={() => openDeleteItemDialog(row.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Tooltip>
      {showUpdateStatusBtn && (
        <Tooltip title="Status">
          <Switch checked={Status} onChange={() => openUpdateItemsStatusDialog(row.id)} color="primary" />
        </Tooltip>
      )}
    </>
  );
};

export default CustomActionsColumnFormatter;
