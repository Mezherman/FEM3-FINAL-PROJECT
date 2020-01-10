import { makeStyles } from '@material-ui/core';

const useStylesCarousel = makeStyles({
  mainCarousel: {
    height: 'calc(100vh - 300px) !important',
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
          color: '#1a1a1a',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .41)',
          cursor: 'pointer',
        },
        '& li.active': {
          backgroundColor: '#333',
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
          opacity: '1 !important',
        },
        '& .paging-item': {
          '&::after': {
            display: 'none',
          },
        },
      },
    },
    '& .slider-control-centerright>.arrow-next': {
      position: 'relative',
      padding: '22px 18px',
      background: '#ffffff96',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px',
      cursor: 'pointer',
      '& .arrow-next-top, .arrow-next-bottom': {
        backgroundColor: '#333',
      },
    },
    '& .slider-control-centerleft>.arrow-prev': {
      position: 'relative',
      padding: '22px 18px',
      background: '#ffffff96',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
      cursor: 'pointer',
      '& .arrow-prev-top': {
        top: '19px',
      },
      '& .arrow-prev-top, .arrow-prev-bottom': {
        backgroundColor: '#333',
        right: '32px',
      }
    }
  }
});

export default useStylesCarousel;