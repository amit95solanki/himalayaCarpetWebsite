import * as React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Dialog, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ padding: '0 100px', marginY: '20px' }}>Products</DialogTitle>
      <Link
        to="/indo-nepali-product"
        style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center', marginBottom: '10px' }}
        onClick={() => {
          handleClose();
        }}
      >
        Indo Nepali
      </Link>
      <Link
        to="/hand-knotted-product"
        style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center', marginBottom: '20px' }}
        onClick={() => {
          handleClose();
        }}
      >
        Hand Knotted
      </Link>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        className="gradient-text"
        onClick={handleClickOpen}
        sx={{ marginTop: '8px', fontWeight: '400', cursor: 'pointer' }}
      >
        PRODUCT
      </Typography>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
