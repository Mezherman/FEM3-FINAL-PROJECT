import { makeStyles } from '@material-ui/core/styles';
import Variables from '../../Variables/variables';

const useStyles = makeStyles({
  root: {
    '& .MuiFormGroup-root': {
      textAlign: 'left'
    },
    '& .MuiCollapse-container': {
      paddingRight: '17px'
    },
    '& .MuiCheckbox-root': {
      color: Variables.colors.btnMainBg
    }
  }
});

export default useStyles;