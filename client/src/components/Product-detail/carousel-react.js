import React from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ImageGallery from 'react-image-gallery';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => createStyles({
  button: {
    // padding: '50px 10px',
    // right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
  }

}))

const MyGallery = ({ images, srcSet }) => {
  const theme = useTheme();
  const classes = useStyles();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <ImageGallery
      // renderRightNav={(onClick, disabled) => (
      //   <Button
      //     color="primary"
      //     className={classes.button}
      //     disabled={disabled}
      //     onClick={onClick}
      //   >
      //     <SvgIcon>
      //       <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
      //     </SvgIcon>
      //   </Button>
      // )}
      items={images}
      showThumbnails
      showPlayButton={false}
      disableThumbnailScroll
      srcSet={srcSet}
    />
  )
}

export default MyGallery;
