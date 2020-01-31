import React from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ImageGallery from 'react-image-gallery';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => createStyles({
  buttonLeft: {
    // padding: '50px 10px',
    // right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
    left: '-14%',
    position: 'absolute'
  },
  buttonRight: {
    // padding: '50px 10px',
    // right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
    left: '95%',
    position: 'absolute'
  },
  fullScreen: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    color: theme.palette.text.primary,
    '& active': {
      color: 'white'
    }
  },
}))

const ProductDetailCarousel = ({ images, srcSet }) => {
  const theme = useTheme();
  const classes = useStyles();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <ImageGallery
      renderLeftNav={(onClick, disabled) => (
        <Button
          className={classes.buttonLeft}
          disabled={disabled}
          onClick={onClick}
        >
          <SvgIcon>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
          </SvgIcon>
        </Button>
      )}
      renderRightNav={(onClick, disabled) => (
        <Button
          className={classes.buttonRight}
          disabled={disabled}
          onClick={onClick}
        >
          <SvgIcon>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
          </SvgIcon>
        </Button>
      )}
      renderFullscreenButton={
        (onClick, isFullscreen) => (
          <Button
            className={classes.fullScreen}
            onClick={onClick}
          >
            {isFullscreen
              ? (
                <SvgIcon className="active" color="default" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 2h2v5h7v2h-9v-7zm9 13v2h-7v5h-2v-7h9zm-15 7h-2v-5h-7v-2h9v7zm-9-13v-2h7v-5h2v7h-9z" /></svg>
                </SvgIcon>
              )
              : (
                <SvgIcon >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9z" /></svg>
                </SvgIcon>
              )}
          </Button>
        )
      }

      items={images}
      showThumbnails
      showPlayButton={false}
      disableThumbnailScroll
      srcSet={srcSet}
    />
  )
};

export default ProductDetailCarousel;
