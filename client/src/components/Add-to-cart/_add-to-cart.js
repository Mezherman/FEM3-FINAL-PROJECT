import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    fontSize: '20px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0.5, 2),
    fontWeight: 'bold'
  },
  body: {
    padding: theme.spacing(1, 2),
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(2, 2),
  },
  btn: {
    width: '100%'
  },
  qtyPicker: {
    width: '100px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('md')]: {
    qtyPicker: {
      width: '150px'
    }
  },
  sign: {
    fontSize: '36px',
    textAlign: 'center',
    padding: '5px',
    backgroundColor: 'gray',
    cursor: 'pointer'
  },
  qty: {
    textAlign: 'center',
    fontSize: '16px'
  },
  price: {
    minWidth: '20%',
    padding: '5px',
    backgroundColor: 'rgba(240,235,84,0.72)',
    textAlign: 'center',
    borderRadius: '4px',
    fontSize: '18px'
  },
  total: {
    minWidth: '20%',
    fontSize: '20px',
    textAlign: 'center'
  },
  pricingBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 0),
  }
}));

export default useStyles;