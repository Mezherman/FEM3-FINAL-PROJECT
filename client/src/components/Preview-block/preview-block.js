import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { Divider, IconButton, Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './_preview-block';
import Preview from './Preview/preview';
import getAllCards from '../../services/dataBase';

export default function PreviewBlock(props) {
  const classes = useStyles();
  const { checked, onClose } = props;

  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    getAllCards()
      .then((response) => {
        setData({ products: response.products })
      })
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Fade in={checked} timeout={0}>
          <Paper elevation={4} className={classes.paper}>
            <Container>
              <p className={classes.header}>
                <span className={classes.text}>Quickview Cart</span>
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </p>
              <Divider />
              <>
                {data.products.length > 0
                  ? (<Preview products={data.products} />)
                  : (
                    <div className={classes.empty}>
                      You have no items in your shopping cart.
                    </div>
                  )}
              </>
            </Container>
          </Paper>
        </Fade>
      </div>
    </>
  );
}

PreviewBlock.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};