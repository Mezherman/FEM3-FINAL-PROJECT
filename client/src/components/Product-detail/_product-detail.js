import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '28px',
    fontWeight: '400',
  },
  MuiBoxRoot: {
    padding: '10px 0',
    borderStyle: 'dotted'
  },
  MuiListRoot: {
    listStyleType: 'disc',
  },
  productShopArea: {

    backgroundColor: theme.palette.background.default
  },
  priceBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  highlights: {
    textAlign: 'justify'
  },
  specifications: {
    // cursor: 'pointer',
    // backgroundColor:,
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
  property: {
    fontWeight: 'bold',

  }
}));

export default useStyles;