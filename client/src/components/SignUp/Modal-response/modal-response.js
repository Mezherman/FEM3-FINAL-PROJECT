import React from 'react';

import {
  Modal,
  Fade,
  Button,
  Backdrop
} from '@material-ui/core';
import useStyles from './_modal-response';

const ModalResponse = ({
  success, openModal, handleClose, inModal, classModal, value, submitClass
}) => {
  const classes = useStyles();
  if (success) {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalInfoIcon}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={inModal}>
          <div className={classModal}>
            <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
              {value}
            </h2>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              className={submitClass}
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

export default ModalResponse;
