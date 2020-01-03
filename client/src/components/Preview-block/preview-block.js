import React from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { Divider, IconButton } from '@material-ui/core';
import useStyles from './_preview-block';
import Preview from './preview';

// eslint-disable-next-line react/prop-types
export default function PreviewBlock(props) {
  const classes = useStyles();
  const { checked, onClose } = props;

  return (
    <>
      <div className={classes.container}>
        <Fade in={checked} timeout={0}>
          <Paper elevation={4} className={classes.paper}>
            <div className={classes.wrapper}>
              <p className={classes.header}>
                Quickview Cart
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </p>
              <Divider />
              <div>
                {true
                  ? (<><Preview /></>)
                  : (
                    <div style={{ padding: '20px 0' }}>
                      You have no items in your shopping cart.
                    </div>
                  )}
              </div>
            </div>
          </Paper>
        </Fade>
      </div>
    </>
  );
}
