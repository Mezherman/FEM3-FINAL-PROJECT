import { makeStyles } from '@material-ui/core';

const useStylesMainCarousel = makeStyles((theme) => ({

  itemContainer: {
    position: 'relative',
  },

  img: {
    width: '100%',
  },

  title: {
    fontSize: '4em',
    margin: '10px',
  },

  description: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8em',
    },
    fontSize: '2.3em',
    margin: '10px',
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
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: '',
    top: '6%',
    fontSize: '0.19rem',
    right: 39,
    padding: '2px',
    borderRadius: theme.spacing(1),
    maxWidth: '550px',
    color: theme.palette.text.primary,
    position: 'absolute',
    backgroundColor: theme.palette.background.secondary,
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

  // mainPagingItem: {
  //   '&::after': {
  //     display: 'none',
  //   },
  // },

  ulMainPagingItem: {
    position: 'relative',
    top: '45px',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  liMainPagingItem: {
    position: 'relative',
    bottom: '30px',
    display: 'inline-block',
    margin: '0 5px',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .41)',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: theme.palette.secondary.main,
      '& button': {
        color: 'white'
      },
    },
  },

  buttonMainPagingItem: {
    display: 'inline-block',
    padding: '9px 11px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    opacity: 1,
  },

}));

export default useStylesMainCarousel;
