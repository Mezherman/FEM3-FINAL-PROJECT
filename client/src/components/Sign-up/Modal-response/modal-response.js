import React from 'react';

import {
  Modal,
  Fade,
  Button,
  Backdrop
} from '@material-ui/core';
import { PropTypes } from 'prop-types'
import useStyles from './_modal-response';

const ModalResponse = ({
  openModal, handleClose, inModal, classModal, value, submitClass
}) => {
  const classes = useStyles();

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
};
//
// ModalResponse.PropTypes = {
//   // openModal, handleClose, inModal, classModal, value, submitClass
//   openModal: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   meta: PropTypes.arrayOf([PropTypes.object]).isRequired
// };

export default ModalResponse;
