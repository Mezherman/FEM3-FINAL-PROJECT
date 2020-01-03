import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { Divider } from '@material-ui/core';
import useStyles from './_preview-block';
import Preview from './preview';

export default function PreviewBlock() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleChange}>Open basket</button>
      <div className={classes.container}>
        <Fade in={checked} timeout={0}>
          <Paper elevation={4} className={classes.paper}>
            <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
              <h3 className={classes.header}>
                Quickview Cart
                <CloseIcon
                  fontSize="large"
                  onClick={handleChange}
                />
              </h3>
              <Divider />
              <div >
                {false ? null
                  : (
                    <div>
                      {true
                        ? (<><Preview /></>)
                        : (
                          <div style={{ padding: '20px 0' }}>
                            You have no items in your shopping cart.
                          </div>
                        )}
                    </div>
                  )}
              </div>
            </div>
          </Paper>
        </Fade>
      </div>
    </div>
  );
}
