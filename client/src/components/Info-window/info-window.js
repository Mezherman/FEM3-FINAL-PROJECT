import React, { useState } from 'react';
import {
  Backdrop,
  Fade,
  Modal
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './_info-window';

const ModalInfoWindow = ({infoTitle, infoText, children}) => {
  const [openInfo, setOpenInfo] = useState(false);
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const classes = useStyles();

  return (
    <>
      {/*<InfoOutlinedIcon fontSize="small" className={classes.infoIcon} type="button" onClick={handleOpenInfo} />*/}
      <span onClick={handleOpenInfo}>
        {children}
      </span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalInfoIcon}
        open={openInfo}
        onClose={handleCloseInfo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openInfo}>
          <div className={classes.paperInfoIcon}>
            <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
              {infoTitle}
              <CloseIcon
                className={classes.modalInfoClose}
                color="action"
                onClick={handleCloseInfo}
              />
            </h2>
            <p id="transition-modal-description" className={classes.modalInfoText}>
              {infoText}
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  )
};

export default ModalInfoWindow;
