import { makeStyles } from '@material-ui/core';

const useStylesCarousel = makeStyles((theme) => ({
  carouselContainer: {
    height: 'calc(100vh - 482px)',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 425px)',
    },
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 310px)',
    },
    [theme.breakpoints.up('lg')]: {
      height: 'calc(100vh - 213px)',
    },
    [theme.breakpoints.up('xl')]: {
      height: 'calc(100vh - 180px)',
    },
    // '& div>div>ul>li>img': {
    //   bottom: 0
    // },
  },

  mainPagingItem: {
    '&::after': {
      display: 'none',
    },
  },

  pagingItem: {
    position: 'relative',
    margin: '0 3px',
    '&::after': {
      position: 'absolute',
      top: '13px',
      right: 0,
      zIndex: -1,
      width: '45px',
      borderBottom: '2px solid #4b4747',
      content: '',
    },
  },

  pagingItemActive: {
    '&::after': {
      borderBottom: '4px solid black',
      content: '',
    },
  },

  // ulMainPagingItem: {
  //   position: 'relative',
  //   top: '45px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   margin: 0,
  //   padding: 0,
  //   listStyleType: 'none',
  // },
  //
  // liMainPagingItem: {
  //   position: 'relative',
  //   bottom: '30px',
  //   display: 'inline-block',
  //   margin: '0 5px',
  //   color: theme.palette.text.primary,
  //   backgroundColor: theme.palette.background.default,
  //   borderRadius: '8px',
  //   boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .41)',
  //   cursor: 'pointer',
  //   '&.active': {
  //     backgroundColor: theme.palette.secondary.main,
  //     '& button': {
  //       color: 'white'
  //     },
  //   },
  // },
  //
  // buttonMainPagingItem: {
  //   display: 'inline-block',
  //   padding: '9px 11px',
  //   background: 'transparent',
  //   border: 'none',
  //   outline: 'none',
  //   cursor: 'pointer',
  //   opacity: 1,
  // },

  buttonPagingItem: {
    position: 'relative',
    padding: '0 20px',
    opacity: 0,
  },

  ulPagingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'inherit',
    listStyleType: 'none',
  },

  arrowsTopBottom: {
    background: theme.palette.text.primary,
    transform: 'rotate(-135deg)',
    transformOrigin: 'top right',
  },

  arrowNext: {
    position: 'relative',
    padding: '18px 13px',
    cursor: 'pointer',
    '&:hover .arrow-next-top::after': {
      left: 0,
      transitionDelay: '.15s',
    },
    '&:hover .arrow-next-bottom::after': {
      right: 0,
      transitionDelay: '0s',
    },
  },

  arrowNextTopBottom: {
    position: 'absolute',
    right: '5px',
    width: '26px',
    height: '2px',
    background: theme.palette.text.primary,
    '&::after': {
      position: 'absolute',
      top: 0,
      height: '100%',
      background: theme.palette.primary.main,
      transition: 'all .15s',
      content: '',
    },
  },

  arrowNextTop: {
    transform: 'rotate(45deg)',
    transformOrigin: 'bottom right',
    '&::after': {
      right: 0,
      left: '100%',
      transitionDelay: '0s',
    },
  },

  arrowNextBottom: {
    transform: 'rotate(-45deg)',
    transformOrigin: 'top right',
    '&::after': {
      right: '100%',
      left: 0,
      transitionDelay: '.15s',
    },
  },

  arrowPrev: {
    position: 'relative',
    padding: '18px 13px',
    cursor: 'pointer',
    '&:hover .arrow-prev-top::after': {
      left: 0,
      transitionDelay: '.15s',
    },
    '&:hover .arrow-prev-bottom::after': {
      right: 0,
      transitionDelay: '0s',
    },
  },

  arrowPrevTopBottom: {
    position: 'absolute',
    right: '32px',
    width: '26px',
    height: '2px',
    background: theme.palette.text.primary,
    '&::after': {
      position: 'absolute',
      top: 0,
      height: '100%',
      background: theme.palette.primary.main,
      transition: 'all .15s',
      content: '',
    },
  },

  arrowPrevTop: {
    top: theme.spacing(2),
    transform: 'rotate(135deg)',
    transformOrigin: 'bottom right',
    '&::after': {
      right: 0,
      left: '100%',
      transitionDelay: '0s',
    },
  },

  arrowPrevBottom: {
    transform: 'rotate(-135deg)',
    transformOrigin: 'top right',
    '&::after': {
      right: '100%',
      left: 0,
      transitionDelay: '.15s',
    },
  },

}));

export default useStylesCarousel;
