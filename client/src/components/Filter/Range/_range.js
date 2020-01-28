import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   '&.PrivateValueLabel-circle': {
  //     transform: 'none',
  //     borderRadius: 0,
  //     backgroundColor: 'inherit'
  //   },
  //   '&.PrivateValueLabel-label': {
  //     color: theme.palette.primary.main,
  //     // transform: 'none',
  //     display: 'none'
  //   },
  //   '&.PrivateValueLabel-offset': {
  //     display: 'none'
  //   },
  //   '&.MuiSlider-valueLabel': {
  //     fontSize: '1rem',
  //     top: '25px',
  //     fontWeight: 'bold',
  //     display: 'none'
  //   },
  //   '& .MuiSlider-thumb': {
  //     marginLeft: 0
  //   }
  // },
  inputs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    // '&.MuiInput-underline::before': {
    //   content: 'none'
    // },
    '&.MuiInput-underline::after': {
      content: 'none'
    },

  }
}));

export default useStyles;