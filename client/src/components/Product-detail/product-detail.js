import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Box, Typography } from '@material-ui/core';
import './carousel-react.scss';
import StopIcon from '@material-ui/icons/Stop';

import ReactImageZoom from 'react-image-zoom';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MyGallery from './carousel-react'
import AddToBasket from '../Add-to-basket/add-to-basket';
import useStyles from './_product-detail';
import CheckIcon from '@material-ui/icons/Check';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SimpleTable from './table';
import ProductDetailCollapse from './collapse';

export default function ProductDetail({ product }) {
  const { imageUrls, name, currentPrice, previousPrice, myCustomParams, brand } = product;
  const { productHighlights, productDescription } = myCustomParams;
  const classes = useStyles();
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  const closeModal = () => {
    setModalVisibility(false)
  };

  //   const zoom = { width: 400, zoomWidth: 400, offset: { vertical: 0, "horizontal": -100, zoomStyle: {} }};
  //
  //   const zoomImage = imageUrls.map((url) => (
  //
  //   <ReactImageZoom {img: url, ...zoom} />
  // ));


    const images = imageUrls.map((url) => (
  {
      original: url,
      thumbnail: url
    }
  ));

  const BootstrapInput = withStyles((theme) => createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),)(InputBase);

  return (
    <Container maxWidth="xl">
      <AddToBasket
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ imageUrls, name, currentPrice }}
      />
      <h1 className={classes.title}>{name.toUpperCase()[0] + name.slice(1)}</h1>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={12} md={7} xl={6}>
          <MyGallery
            images={images}
            // key={imageUrls: [0]}
          />
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={5} xl={6}>
          <Grid container spacing={1}>
            {/*<Grid item xs={12} sm={12} md={12}>*/}
            {/*  <Typography align="right">*/}
            {/*    <a href="#">Submit a review</a>*/}
            {/*  </Typography>*/}
            {/*</Grid>*/}
            <Grid item xs={12} sm={6} md={12} xl={6}>
              <Box
                border={1}
                borderColor="text.primary"
                className={classes.productFeatures}
              >
                <ul className={classes.MuiListRoot}>
                  <li>
                    {brand}
                  </li>
                  <li>
                    Collection: {myCustomParams.collection}
                  </li>
                  <li>
                    {myCustomParams.setSize > 1 ? `${myCustomParams.setSize}-pcs.` : `${myCustomParams.setSize}-pc.`}
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12} xl={6}>
              <Box
                className={classes.productShopArea}
              >
                <Container>
                  <div className={classes.priceBox}>
                    {previousPrice && (
                      <span className={classes.oldPrice}>
                        &#8364;
                        {previousPrice}
                      </span>
                    )}
                    <span
                      className={previousPrice ? classes.specialPrice : classes.regularPrice}
                    >
                      &#8364;
                      {currentPrice}
                    </span>
                  </div>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="quantity">Quantity</InputLabel>
                    <NativeSelect
                      id="quantity"
                      value={quantity}
                      onChange={handleChange}
                      input={<BootstrapInput />}

                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </NativeSelect>
                  </FormControl>
                  <div className={classes.disableBlock}>
                    <span>Disable:</span>
                    <span>
                      <StopIcon />
                      In stock
                    </span>
                  </div>

                  <Divider />
                  <div className={classes.addToCart}>
                    <Button
                      size="large"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disableElevation
                      onClick={() => {
                        setModalVisibility(true)
                      }}
                    >
                      <ShoppingCartOutlinedIcon />
                    </Button>
                  </div>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12} xl={12}>
              <List>
              <ListItem button>
                <ListItemIcon color="primary">
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary="Free delivery over 49€" />
              </ListItem>
              </List>
                <li>
                  Free delivery over 49€
                </li>
                <li>Free returns</li>
            </Grid>
            <Grid item xs={12} sm={6} md={12} xl={6}>
                <li>
                  Secure payment
                </li>
                <li>Certified online shop</li>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6} >
          <ProductDetailCollapse data={product} />
          {/*Highlights:*/}
          {/*<ul>*/}
          {/*  {productHighlights.map((text) => (<li key={text}>{text}</li>))}*/}
          {/*</ul>*/}
          {/*Product description:*/}
          {/*{productDescription.map((text) => (<p key={text}>{text}</p>))}*/}
        </Grid>
        <Grid item xs={12} md={6}>
          Specifications:
          <SimpleTable data={product} />
        </Grid>
      </Grid>
    </Container>
  );
}

ProductDetail.propTypes = {
  // product: PropTypes.objectOf(PropTypes.string).isRequired,

  product: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])).isRequired,
  // name: PropTypes.string.isRequired,
  // imageUrls: PropTypes.array.isRequired,
  // currentPrice: PropTypes.string.isRequired,
  // specialPrice: PropTypes.string,
  // highlights: PropTypes.arrayOf(PropTypes.string),
  // productDescription: PropTypes.arrayOf(PropTypes.string)
};

ProductDetail.defaultProps = {
  // specialPrice: false,
  // productHighlights: [],
  // productDescription: []
};
