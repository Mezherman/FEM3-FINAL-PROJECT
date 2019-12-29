import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Fade, Backdrop } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none'
  },
}));

export default function ModalWindow(props) {
  const classes = useStyles();
  const { open, onClick, children } = props;
  // console.log('children = ', children);
  // console.log('children type = ', children.type);

  const handleClose = () => {
    onClick();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          {children}
        </Paper>
      </Fade>
    </Modal>
  );
}

ModalWindow.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.symbol])
};

ModalWindow.defaultProps = {
  open: false,
  onClick: () => {},
  children: {},
};