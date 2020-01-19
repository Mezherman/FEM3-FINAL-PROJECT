import { makeStyles } from '@material-ui/core';

const useStylesMainCarousel = makeStyles((theme) => ({

  itemContainer: {
    position: 'relative',
  },

  img: {
    width: '100%',
  },

  textBlock: {

    borderBottomLeftRadius: theme.spacing(1),
    maxWidth: '300px',
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    position: 'absolute',
    top: 55,
    right: 55,
    backgroundColor: theme.palette.background.secondary,
  },

}));

export default useStylesMainCarousel;
