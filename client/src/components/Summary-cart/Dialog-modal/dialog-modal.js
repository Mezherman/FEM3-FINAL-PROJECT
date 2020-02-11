import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function DialogModal({ onCloseDialogWithStatus, isOpen, message }) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => { onCloseDialogWithStatus(false) }}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" color="text.primary">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => { onCloseDialogWithStatus(false) }} color="secondary">
          Disagree
        </Button>
        <Button variant="contained" onClick={() => { onCloseDialogWithStatus(true) }} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default DialogModal;

DialogModal.propTypes = {
  onCloseDialogWithStatus: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
}

DialogModal.defaultProps = {
  isOpen: false,
  message: 'Delete product from shopping cart?'
}
