import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  qtyPicker: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '70%',
    }
  },
  [theme.breakpoints.up('md')]: {
    qtyPicker: {
    }
  },
  qty: {
    textAlign: 'center',
    fontSize: '16px',
  },
  input: {
    '& .MuiInputBase-input': {
      maxWidth: '50px',

      textAlign: 'center',
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&.MuiInput-underline::after': {
      content: 'none'
    },
  }
}));

export default useStyles;
