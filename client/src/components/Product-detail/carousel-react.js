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
    left: '-10%',
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
  }

}))

const MyGallery = ({ images, srcSet }) => {
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
            // className={classes.buttonRight}
            onClick={onClick}
          >
            {isFullscreen
              ? (
                <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 9h-2v-4h-4v-2h6v6zm-6 12v-2h4v-4h2v6h-6zm-18-6h2v4h4v2h-6v-6zm6-12v2h-4v4h-2v-6h6z" />
                  </svg>
                </SvgIcon>
              )
              : (
                <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 9h-2v-4h-4v-2h6v6zm-6 12v-2h4v-4h2v6h-6zm-18-6h2v4h4v2h-6v-6zm6-12v2h-4v4h-2v-6h6z" />
                  </svg>
                </SvgIcon>
              )}
          </Button>

          // <button
          //   type='button'
          //   className={
          //     `image-gallery-fullscreen-button${isFullscreen ? ' active' : ''}`}
          //   onClick={onClick}
          // />
        )
      }

      items={images}
      showThumbnails
      showPlayButton={false}
      disableThumbnailScroll
      srcSet={srcSet}
    />
  )
}

export default MyGallery;
