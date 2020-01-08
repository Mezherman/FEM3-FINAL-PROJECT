import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    paddingBottom: '20px',
    '&:hover': {
      zIndex: '1',
      boxShadow: '0px 0 1px 0px #aaa, 0px 5px 11px #909090',
      cursor: 'pointer',
    }
  },
  imgWrapper: {
    width: '96%',
    maxWidth: '720px',
    margin: '0 auto',
    paddingTop: '10px',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  title: {
    paddingBottom: '60px',
    overflow: 'hidden',
    color: theme.palette.text.primary,
    fontWeight: '300',
    fontSize: '18px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  },
  priceBox: {
    textAlign: 'right',
  },
  regularPrice: {
    display: 'inline-block',
    paddingBottom: '30px',
    color: theme.palette.primary,
    fontWeight: '700',
    fontSize: '26px',
    textAlign: 'right',
    verticalAlign: 'bottom',
    '&::before': {
      content: 'foo'
    }
  }
}));

export default useStyles;

// &-special-price {
//     display: inline-block;
//     padding-bottom: 30px;
//     color: $color-danger;
//     font-weight: 700;
//     font-size: 26px;
//     text-align: right;
//     vertical-align: bottom;
//   &::before {
//       content:' \20AC';
//     }
//   }
// &-old-price {
//     position: relative;
//     right: 20px;
//     display: inline-block;
//     padding-bottom: 30px;
//     color: $color-dark;
//     font-weight: 300;
//     font-size: 20px;
//     //text-align: right;
//     text-decoration:line-through;
//     vertical-align: bottom;
//   &::before {
//       content:' \20AC';
//     }
//   }
// &:hover {
//     z-index: 1;
//     box-shadow: 0px 0 1px 0px #aaa, 0px 5px 11px #909090;
//     cursor: pointer;
//   }
// }
//
// @media screen and (max-width: 640px) {
//
// }
//
// @media screen and (min-width: 641px) and (max-width: 980px) {
// .product-card {
//   &-image {
//     }
//   }
// }