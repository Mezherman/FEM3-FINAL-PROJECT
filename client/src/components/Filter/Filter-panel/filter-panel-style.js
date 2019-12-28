import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiFormGroup-root': {
      textAlign: 'left'
    },
    '& .MuiCollapse-container': {
      paddingRight: '17px'
    },
    '& .MuiCheckbox-root': {
      color: '#71b430'
    }
  }
});

export default useStyles;