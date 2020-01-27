import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function DialogModal({ onCloseDialogWithStatus, isOpen }) {
  // console.log(isOpen);

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {onCloseDialogWithStatus(false)}}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Delete product from shopping cart?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { onCloseDialogWithStatus(false) } } color="danger">
          Disagree
        </Button>
        <Button onClick={() => { onCloseDialogWithStatus(false) } } color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
