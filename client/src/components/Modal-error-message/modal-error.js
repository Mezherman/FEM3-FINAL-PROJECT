import { Backdrop, Button, Fade, Modal } from '@material-ui/core';
import React from 'react';

const ErrorMessage = ({ error, handleClose, classes }) => {
  if (error) {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalInfoIcon}
        open={error}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={error}>
          <div className={classes.paperInfoError}>
            <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
              Something go wrong. Try again
            </h2>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              OK
            </Button>
          </div>
        </Fade>
      </Modal>
    )
  }
  return null
};

export default ErrorMessage;
