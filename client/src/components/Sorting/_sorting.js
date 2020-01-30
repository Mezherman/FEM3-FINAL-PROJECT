import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    '&.MuiFormLabel-root': {
      color: theme.palette.primary.dark,
    }
  }
}));

export default useStyles;
