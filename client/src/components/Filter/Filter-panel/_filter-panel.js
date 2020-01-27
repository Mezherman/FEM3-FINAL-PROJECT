import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormGroup-root': {
      textAlign: 'left'
    },
    '& .MuiCollapse-container': {
      paddingRight: '17px'
    },
    // '& .MuiCheckbox-root': {
    //   color: theme.palette.primary.main,
    // },
    // '& .Mui-checked': {
    //   color: theme.palette.secondary.main,
    // }
  }
}));

export default useStyles;