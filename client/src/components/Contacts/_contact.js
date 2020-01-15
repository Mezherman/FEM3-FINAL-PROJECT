import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contact: {
    cursor: 'pointer',
    '&:hover': {
      color: 'green'
    }
  }
}));

export default useStyles;