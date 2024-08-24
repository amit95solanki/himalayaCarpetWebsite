import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloneIcon from '@mui/icons-material/ContentCopy';
import DetailsIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import DocumentIcon from '@mui/icons-material/Description';
import HealthIcon from '@mui/icons-material/LocalHospital';

export const ActionColumnFormatter = ({
  id,
  row,
  pageName,
  openEditItemPage,
  showEditButton,
  openDetalisPage,
  openDocumentPage,
  openHealthPage,
  showDeleteButton,
  showCloneButton,
  showDetailButton,
  openDeleteItemDialog,
  openCloneItemDialog,
  rouvrDefaultRole,
  permissions,
  Status = '',
  showHealthButton,
  showDocumentButton,
  ...props
}) => {
  const handleEditClick = (event) => {
    if (Status.toLowerCase() === 'pending' || Status.toLowerCase() === 'un-assigned') {
      event.preventDefault();
    } else {
      openEditItemPage(id);
    }
  };

  const handleDetailClick = (event) => {
    if (Status.toLowerCase() === 'pending') {
      openDetalisPage(id);
    } else {
      event.preventDefault();
    }
  };

  const handleDeleteClick = (event) => {
    if (Status.toLowerCase() === 'pending' || Status.toLowerCase() === 'un-assigned') {
      event.preventDefault();
    } else {
      openDeleteItemDialog(id);
    }
  };

  const handleCloneClick = () => {
    openCloneItemDialog(id, row.original);
  };

  const handleDocumentClick = (event) => {
    if (Status.toLowerCase() === 'pending' || Status.toLowerCase() === 'un-assigned') {
      event.preventDefault();
    } else {
      openDocumentPage(id);
    }
  };

  const handleHealthClick = (event) => {
    if (Status.toLowerCase() === 'pending' || Status.toLowerCase() === 'un-assigned') {
      event.preventDefault();
    } else {
      openHealthPage(id);
    }
  };

  return (
    <>
      {showEditButton && (
        <Tooltip title={`Edit ${pageName}`}>
          <IconButton size="small" onClick={handleEditClick}>
            <EditIcon color="primary" />
          </IconButton>
        </Tooltip>
      )}
      {showCloneButton && (
        <Tooltip title={`Clone ${pageName}`}>
          <IconButton size="small" onClick={handleCloneClick}>
            <CloneIcon color="primary" />
          </IconButton>
        </Tooltip>
      )}
      {(showDetailButton || (pageName === 'Organization' && Status.toLowerCase() === 'pending')) && (
        <Tooltip title={`Details ${pageName}`}>
          <IconButton size="small" onClick={handleDetailClick}>
            <DetailsIcon color="primary" />
          </IconButton>
        </Tooltip>
      )}
      {showDeleteButton && (
        <Tooltip title={`Delete ${pageName}`}>
          <IconButton size="small" onClick={handleDeleteClick}>
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      )}
      {showHealthButton && (
        <Tooltip title={`Document ${pageName}`}>
          <IconButton size="small" onClick={handleDocumentClick}>
            <DocumentIcon color="primary" />
          </IconButton>
        </Tooltip>
      )}
      {showDocumentButton && (
        <Tooltip title={`Healthcare ${pageName}`}>
          <IconButton size="small" onClick={handleHealthClick}>
            <HealthIcon color="primary" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};
