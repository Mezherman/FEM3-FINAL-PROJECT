import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '500px'
  },
  carousel: {
    paddingBottom: theme.spacing(2)
  },
  title: {
    textTransform: 'capitalize',
  }
}));

export default useStyles;
