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
    '& div>div>ul>li>img': {
      bottom: 0
    },

  },
  mainCarousel: {
    '& .slider-control-bottomcenter': {
      position: 'absolute',
      bottom: '-36px',
      left: '50%',
      transform: 'translateX(-50%)',
      '& ul': {
        position: 'relative',
        top: '45px',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
        '& li': {
          position: 'relative',
          bottom: '30px',
          display: 'inline-block',
          margin: '0 5px',
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          borderRadius: '8px',
          boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .41)',
          cursor: 'pointer',
        },
        '& li.active': {
          backgroundColor: theme.palette.secondary.main,
          '& button': {
            color: 'white'
          },
        },
        '& li>button': {
          display: 'inline-block',
          padding: '9px 11px',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          opacity: 1,
        },
        '& .paging-item': {
          '&::after': {
            display: 'none',
          },
        },
      },
    },
    '& .arrow-prev.arrows-control': {
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      left: '1px',
    },
    '& .arrows-control': {
      position: 'relative',
      padding: '22px 18px',
      background: theme.palette.background.default,
      opacity: 0.8,
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
      cursor: 'pointer',
      '& .arrow-next-top, .arrow-next-bottom, .arrow-prev-top, .arrow-prev-bottom': {
        backgroundColor: theme.palette.secondary.main,
      },
      '& .arrow-prev-top': {
        top: '19px',
      },
      '& .arrow-prev-top, .arrow-prev-bottom': {
        right: '32px',
      }
    },
  }
}));

export default useStylesCarousel;
