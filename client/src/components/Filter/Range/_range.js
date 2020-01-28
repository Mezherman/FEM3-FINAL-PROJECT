import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.PrivateValueLabel-circle-457': {
      transform: 'none',
      borderRadius: 0,
      backgroundColor: 'inherit'
    },
    '&.PrivateValueLabel-label-458': {
      color: theme.palette.primary.main,
      transform: 'none'
    },
    '&.PrivateValueLabel-circle-397': {
      transform: 'none',
      borderRadius: 0,
      backgroundColor: 'inherit'
    },
    '&.PrivateValueLabel-label-398': {
      color: theme.palette.primary.main,
      transform: 'none'
    },
    '&.MuiSlider-valueLabel': {
      fontSize: '1rem',
      top: '25px',
      fontWeight: 'bold'
    },
    '& .MuiSlider-thumb': {
      marginLeft: 0
    },
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export default useStyles;