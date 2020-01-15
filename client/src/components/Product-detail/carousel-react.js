import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ImageGallery from 'react-image-gallery';

const MyGallery = ({ images }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <ImageGallery
      items={images}
      showThumbnails
      showPlayButton={false}
      disableThumbnailScroll
    />
  )
}

export default MyGallery;
