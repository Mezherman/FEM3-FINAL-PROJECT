import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '28px',
    fontWeight: '400',
  },
  MuiBoxRoot: {
    height: '100%',
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(1),
    border: '1px dashed',
    borderColor: theme.palette.background.primary,
  },
  MuiListRoot: {
    listStyleType: 'disc',
  },
  disableBlock: {
    marginBottom: theme.spacing(1),
  },
  productShopArea: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.background.primary
  },
  priceBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  oldPrice: {
    display: 'inline-block',
    paddingBottom: theme.spacing(4),
    color: theme.palette.text.primary,
    fontWeight: '300',
    fontSize: '15px',
    textDecoration: 'line-through',
    verticalAlign: 'bottom'
  },
  regularPrice: {
    display: 'inlineBlock',
    paddingBottom: theme.spacing(4),
    color: theme.palette.text.primary,
    fontWeight: '700',
    fontSize: '26px',
    textAlign: 'right',

  },
  specialPrice: {
    display: 'inlineBlock',
    paddingBottom: '30px',
    color: theme.palette.text.secondary,
    fontWeight: '700',
    fontSize: '26px',
    textAlign: 'right',
    verticalAlign: 'bottom',
  },
  highlights: {
    textAlign: 'justify'
  },
  property: {
    fontWeight: 'bold',
  }
}));

export default useStyles;