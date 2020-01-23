import { makeStyles } from '@material-ui/core';

const useStylesMainCarousel = makeStyles((theme) => ({

  itemContainer: {
    position: 'relative',
  },

  img: {
    width: '100%',
  },

  title: {

    fontSize: '5em',
  },

  description: {
    fontSize: '3em',
  },

  textBlock: {
    [theme.breakpoints.up('xs')]: {
      top: '6%',
      maxWidth: '194px',
      fontSize: '0.19rem',
      right: 39,
      padding: '2px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '15%',
      maxWidth: '400px',
      fontSize: '0.3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.32rem',
      maxWidth: '450px',
      top: '28%',
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.41rem',
      top: '31px%',
      maxWidth: '550px',
      padding: theme.spacing(3, 3),

    },
    borderTopLeftRadius: theme.spacing(1),
    maxWidth: '700px',
    color: theme.palette.text.primary,
    position: 'absolute',
    backgroundColor: theme.palette.background.carousel,
    boxShadow: 'inset -187px 33px 51px 21px rgba(235,235,235,0.5)',
  },

  mainArrowsControl: {
    position: 'relative',
    padding: '22px 18px',
    background: theme.palette.background.default,
    opacity: 0.8,
    cursor: 'pointer',
  },

  mainArrowNext: {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },

  mainArrowPrev: {
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    left: '1px',
  },

  mainArrowPrevTop: {
    position: 'absolute',
    right: '32px',
    width: '26px',
    height: '2px',
    top: '19px',
    transform: 'rotate(135deg)',
    transformOrigin: 'bottom right',
  },

}));

export default useStylesMainCarousel;
